import { env } from 'process';
import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { loadEnv } from '@common/helpers/load-env.helper';

loadEnv();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  synchronize: false,
  ssl: false,
  logging: env.NODE_ENV === 'test',
  migrationsRun: env.NODE_ENV === 'test',
  schema: env.DB_SCHEMA || 'public',
  entities: [path.resolve(__dirname, '..', '**', '*.entity{.ts,.js}')],
  migrations: [
    path.resolve(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
};

const ormConfig = new DataSource(dataSourceOptions);
ormConfig.initialize();
export default ormConfig;
