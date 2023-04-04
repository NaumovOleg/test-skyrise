import * as cdk from 'aws-cdk-lib';
import { CodePipeline, } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { config } from 'node-config-ts';
import { Stage } from './stage';
import { SynthStep } from './synth';


export class ProductionPipeline extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repo = cdk.aws_codecommit.Repository.fromRepositoryName(this, 'Repo', config.gitRepo);

    const pipeline = new CodePipeline(this, 'skyrise-pipeline-production', {
      pipelineName: 'skyrise-pipe-production',
      selfMutation: true,
      synth: new SynthStep(repo, 'production')
    });
    
    pipeline.addStage(new Stage(this, 'production'));

  }
}