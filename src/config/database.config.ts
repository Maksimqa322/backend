import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseConfig = {
  type: 'postgres',
  host: process.env.DB_HOST || '192.168.1.65',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'user1',
  password: process.env.DB_PASSWORD || 'user1',
  database: process.env.DB_NAME || 'db',
  autoLoadEntities: true,
  synchronize: true,
} as TypeOrmModuleOptions;
