import apigateway from "aws-cdk-lib/aws-apigateway";
import ec2 from 'aws-cdk-lib/aws-ec2';

export type LambdaResources = {
    vpc: ec2.Vpc,
    apiGateway: apigateway.RestApi
}
