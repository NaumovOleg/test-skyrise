import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class RestApiGateway extends Construct {
  restApi: apigateway.RestApi;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.restApi = new apigateway.RestApi(this, "skyrise-api", {
      restApiName: "skyrise-api",
      description: "Rest api for lambdas"
    });

  }
}