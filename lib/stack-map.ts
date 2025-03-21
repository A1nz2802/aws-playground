import { App, Stack, StackProps } from 'aws-cdk-lib';

import { Lab3, Lab4, Lab5, Lab6, Lab7, Lab8 } from './ec2';
import { Lab9, Lab10, Lab11, Lab12, Lab13, Lab14 } from './s3';
import { Lab1, Lab2 } from './vpc';

type LabStackConstructor = new (
  // eslint-disable-next-line no-unused-vars
  app: App,
  // eslint-disable-next-line no-unused-vars
  id: string,
  // eslint-disable-next-line no-unused-vars
  props?: StackProps,
) => Stack;

const labStackConstructors: LabStackConstructor[] = [
  Lab1,
  Lab2,
  Lab3,
  Lab4,
  Lab5,
  Lab6,
  Lab7,
  Lab8,
  Lab9,
  Lab10,
  Lab11,
  Lab12,
  Lab13,
  Lab14,
];

const LAB_NUMBER = 14;

export function createStack(app: App) {
  const LabConstructor = labStackConstructors[LAB_NUMBER - 1];

  if (!LabConstructor) {
    throw new Error(`Number lab stack is not defined: ${LAB_NUMBER}`);
  }

  return new LabConstructor(app, `lab-${LAB_NUMBER}-stack`, {
    stackName: `lab-${LAB_NUMBER}`,
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
    },
  });
}
