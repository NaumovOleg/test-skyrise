import * as cdk from 'aws-cdk-lib';
import { CodePipeline } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
import { config } from 'node-config-ts';
import { Repository } from './repository';
import { Stage } from './stage';
import { SynthStep } from './synth';

export class DevelopmentPipeline extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const { repository } = new Repository(this, 'CodeCommitRepository');

    const pipeline = new CodePipeline(this, 'skyrise-pipeline-develop', {
      pipelineName: 'skyrise-pipe-develop',
      selfMutation: true,
      synth: new SynthStep(repository, config.branch),
    });

    pipeline.addStage(new Stage(this, config.stage));
  }
}
