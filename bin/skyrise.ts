#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { DevelopmentPipeline } from '../lib/develop-pipeline';

import { config } from 'node-config-ts';

if(!process.env.NODE_ENV || !process.env.DEPLOYMENT){
  throw new Error('Env error')
}

const app = new cdk.App();
new DevelopmentPipeline(app, 'SkyriseDevelopment', {
  env:{
    account:config.account,
    region:config.region,
  }
});