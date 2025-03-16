import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'database', // Значение по умолчанию для Docker
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'user1',
  password: process.env.DB_USER || 'user1',
  database: process.env.DB_NAME || 'db',
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
});
