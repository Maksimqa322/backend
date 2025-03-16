import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env', // Добавляем явное указание на .env-файл
    }),
    TypeOrmModule.forRoot(databaseConfig()), // Вызываем функцию конфигурации
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
