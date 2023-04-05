import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { config } from 'node-config-ts';
import { LambdaResources } from '../../types';

export class CreativeLibraryFunctionConstruct extends Construct {
    handler: lambda.NodejsFunction;
    constructor(scope: Construct, id: string, resources: LambdaResources) {

        const { vpc, apiGateway } = resources

        super(scope, id);

        const handler = new lambda.NodejsFunction(this, 'CreativeLibrary', {
            functionName: `creativeLibrary-${config.stage}`,
            entry: './src/creativeLibrary/handler.ts',
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

        const http = apiGateway.root.addResource('creative-library');

        http.addMethod(
            'ANY',
            new LambdaIntegration(handler, { proxy: true }),
        );
        

        http.addProxy({
            defaultIntegration:new LambdaIntegration(handler, { proxy: true }),
            anyMethod: true 
        })
    }

}