/* eslint-disable @typescript-eslint/no-var-requires */
import * as dotenv from 'dotenv';
import { env } from 'process';

export const loadEnv = (): void => {
  if (env.NODE_ENV === 'test') {
    require('dotenv-flow').config({
      path: '.env.tests',
      purge_dotenv: true,
    });
  }

  dotenv.config();
};
