import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { env } from 'process';

const seedOrmConfig = {
  type: 'postgres',
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,
  synchronize: false,
  migrationsRun: env.NODE_ENV === 'test',
  schema: env.DB_SCHEMA || 'public',
  entities: [path.join(__dirname, '..', '**', '*.entity{.ts,.js}')],
  migrations: [
    path.join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: path.join(__dirname, '..', 'database', 'migrations'),
  },
  seeds: [path.join(__dirname, '..', 'database', 'seeds', '*{.ts,.js}')],
  factories: [
    path.join(__dirname, '..', 'database', 'factories', '*{.ts,.js}'),
  ],
} as TypeOrmModuleOptions;

module.exports = seedOrmConfig;
