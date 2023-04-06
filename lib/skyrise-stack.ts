import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApiGateway } from './resources/apiGateway';
import { CreativeLibraryFunctionConstruct, MediaPlanFunctionConstruct } from './resources/lambda';
import { VpcConstruct } from './resources/vpc';

export class SkyriseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const VPC = new VpcConstruct(this, 'Vpc');
    const apiGateway = new RestApiGateway(this, 'ApiGateway');

    const lambdaResources = {
      vpc: VPC.vpc,
      apiGateway: apiGateway.restApi,
    };

    new MediaPlanFunctionConstruct(this, 'MediaPlanFunc', lambdaResources);
    new CreativeLibraryFunctionConstruct(this, 'CreativeLibraryFunc', lambdaResources);
  }
}
