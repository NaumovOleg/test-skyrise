import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SkyriseStack } from './skyrise-stack';

export class Stage extends cdk.Stage {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SkyriseStack(this, 'Skyrise');
  }
}
