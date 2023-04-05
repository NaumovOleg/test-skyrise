import apigateway from "aws-cdk-lib/aws-apigateway";
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { config } from 'node-config-ts';
import { LambdaResources } from '../../types';

export class MediaPlanFunctionConstruct extends Construct {
    handler: lambda.NodejsFunction;
    constructor(scope: Construct, id: string, resources: LambdaResources) {

        super(scope, id);
        const { vpc, apiGateway } = resources

        const handler = new lambda.NodejsFunction(this, 'MediaPlan', {
            functionName: `mediaPlan-${config.stage}`,
            entry: './src/mediaPlan/handler.ts',
            handler: 'handler',
            vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
            environment: {
                NODE_ENV: config.NODE_ENV,
                ENV: config.NODE_ENV
            },
            bundling: {
                preCompilation: false,
                externalModules: ['aws-sdk', 'config'],
            }
        });

        this.handler = handler;
        const http = apiGateway.root.addResource('media-plan');

        http.addMethod(
            '*',
            new apigateway.LambdaIntegration(handler, { proxy: true }),
        );
    }

}