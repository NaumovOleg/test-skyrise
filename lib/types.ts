import * as apigwv2 from '@aws-cdk/aws-apigatewayv2-alpha';
import ec2 from 'aws-cdk-lib/aws-ec2';

export type LambdaResources = {
  vpc: ec2.IVpc,
  apiGateway: apigwv2.HttpApi
};
