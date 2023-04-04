import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';


export class MediaPlanFunction extends Construct {
    handler: lambda.NodejsFunction;
    constructor(scope: cdk.App, id: string, vpc: ec2.Vpc) {

        super(scope, id);

        const handler = new lambda.NodejsFunction(this, 'RoutesHandler', {
            functionName: `mediaPlan`,
            entry: './src/mediaPlan/handler.ts',
            handler: 'handler',
            vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },

            bundling: {
                preCompilation: false,
                externalModules: ['aws-sdk'],
            }
        });

        this.handler = handler;
    }

}