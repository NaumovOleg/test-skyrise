
import moment from 'moment';
import { config } from 'node-config-ts';

console.log(config.StackEnv)

module.exports.handler = () => {
  console.log('TEST--------------------->',moment());
  return 'done';
};