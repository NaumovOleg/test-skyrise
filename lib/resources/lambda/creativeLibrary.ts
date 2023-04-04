import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { config } from 'node-config-ts';

export class CreativeLibraryFunctionConstruct extends Construct {
    handler: lambda.NodejsFunction;
    constructor(scope: Construct, id: string, vpc: ec2.Vpc) {

        super(scope, id);

        const handler = new lambda.NodejsFunction(this, 'CreativeLibrary', {
            functionName: `creativeLibrary-${config.stage}`,
            entry: './src/creativeLibrary/handler.ts',
            handler: 'handler',
            vpc,
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
            },
            environment:{
                NODE_ENV: config.NODE_ENV
            },
            bundling: {
                preCompilation: false,
                externalModules: ['aws-sdk'],
            }
        });

        this.handler = handler;
    }

}