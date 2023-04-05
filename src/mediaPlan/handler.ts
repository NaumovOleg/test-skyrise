
import { config } from 'node-config-ts';

console.log(config.StackEnv)

module.exports.handler = () => {
  console.log('TEST--------------------->');
  return null;
};