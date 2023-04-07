import moment from 'moment';
import { config } from 'node-config-ts';

console.log(config.StackEnv);

export const handler = () => {
  console.log('TEST--------------------->', moment());
  return {
    statusCode: 200,
    body: 'done',
  };
};
