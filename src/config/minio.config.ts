import { loadEnv } from '@common/helpers/load-env.helper';
import { env } from 'process';

loadEnv();

export const MINIO_BUCKET = env.MINIO_BUCKET;
export const MINIO_URL = env.MINIO_URL;
export const MINIO_LINK = `${MINIO_URL}/${MINIO_BUCKET}`;

export const minioConfig = {
  endPoint: env.MINIO_ENDPOINT,
  accessKey: env.MINIO_ACCESS_KEY,
  port: parseInt(env.MINIO_PORT_HTTP),
  useSSL: env.MINIO_USE_SSL === 'true',
  secretKey: env.MINIO_SECRET_KEY,
};
