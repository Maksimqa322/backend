import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'database', // Значение по умолчанию для Docker
  port: parseInt(process.env.DB_PORT || '5432', 10), // Гарантированная строка
  username: process.env.DB_USER || 'user1',
  password: process.env.DB_PASSWORD || 'user1', // Исправлено с DB_PASSWORD
  database: process.env.DB_NAME || 'db',
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development', // Логи только для разработки
});
