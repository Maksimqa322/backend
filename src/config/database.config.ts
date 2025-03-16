import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const databaseConfig = (): TypeOrmModuleOptions => {
  const configService = new ConfigService();
  return {
    type: 'postgres',
    host: configService.getOrThrow('DB_HOST'),
    port: parseInt(configService.getOrThrow('DB_PORT'), 10),
    username: configService.getOrThrow('DB_USER'),
    password: configService.getOrThrow('DB_PASSWORD'),
    database: configService.getOrThrow('DB_NAME'),
    autoLoadEntities: true,
    synchronize: true,
  } as TypeOrmModuleOptions;
};
