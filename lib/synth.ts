import * as cdk from 'aws-cdk-lib';
import { CodeBuildStep, CodePipelineSource } from 'aws-cdk-lib/pipelines';

export class SynthStep extends CodeBuildStep  {
  constructor(repo:cdk.aws_codecommit.IRepository, branch: string) {

    super('SynthStep', {
      input: CodePipelineSource.codeCommit(repo, branch),
      installCommands: ['npm i -g yarn -g aws-cdk '],
      buildEnvironment: {
        privileged: true,
        environmentVariables: {
          DEPLOYMENT: { value: branch, type: cdk.aws_codebuild.BuildEnvironmentVariableType.PLAINTEXT },
          NODE_ENV: { value: branch, type: cdk.aws_codebuild.BuildEnvironmentVariableType.PLAINTEXT },
        }       
      },
      commands: ['yarn install', `DEPLOYMENT=${branch} npx cdk synth`]
    });
  }

}