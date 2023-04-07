import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';

import { SkyriseStack } from '../lib/skyrise-stack';

new SkyriseStack(new cdk.App(), 'local-run');
