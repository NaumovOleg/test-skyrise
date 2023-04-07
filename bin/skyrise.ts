#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { config } from 'node-config-ts';
import 'source-map-support/register';

import { DevelopmentPipeline } from '../lib/develop-pipeline';
// import { ProductionPipeline } from '../lib/production-pipeline';

if (!process.env.DEPLOYMENT || !process.env.NODE_ENV) {
  throw new Error('Env error');
}

const app = new cdk.App();
new DevelopmentPipeline(app, 'DevPipeline', { env: config.StackEnv });
// new ProductionPipeline(app, 'ProdPipeline', { env: config.StackEnv });
app.synth();
