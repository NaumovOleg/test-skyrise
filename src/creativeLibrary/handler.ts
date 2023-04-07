import { APIGatewayProxyResult } from 'aws-lambda';
import moment from 'moment';

export const lambdaHandler = async (): Promise<APIGatewayProxyResult> => {
  console.debug('TIME', moment());

  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ response: 'success response from creative library' }),
  };
};
