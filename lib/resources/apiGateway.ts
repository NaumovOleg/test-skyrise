import * as apigwv2 from '@aws-cdk/aws-apigatewayv2-alpha';
import { Construct } from 'constructs';

export class RestApiGateway extends Construct {
  restApi: apigwv2.HttpApi;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.restApi = new apigwv2.HttpApi(this, 'HttpApi');
  }
}
