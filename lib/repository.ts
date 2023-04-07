import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { Construct } from 'constructs';

export class Repository extends Construct {
  readonly repository: codecommit.IRepository;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.repository = new codecommit.Repository(this, 'Repository', {
      repositoryName: 'GitSkyrise',
    });
  }
}
