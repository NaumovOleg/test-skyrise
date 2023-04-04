import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CreativeLibraryFunctionConstruct, MediaPlanFunctionConstruct } from './resources/lambda';
import { VpcConstruct } from './resources/vpc';

export class SkyriseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const  VPC = new VpcConstruct(this, 'Vpc')
    const creativeLibraryFunction = new MediaPlanFunctionConstruct(this, 'MediaPlanFunc', VPC.vpc)
    const creativeLibraryFunctionConstruct = new CreativeLibraryFunctionConstruct(this, 'CreativeLibraryFunc', VPC.vpc)

  }
}
