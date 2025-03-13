import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Загрузите переменные окружения
  dotenv.config();

  // Создайте приложение NestJS
  const app = await NestFactory.create(AppModule);

  // Включите CORS для всех доменов
  app.enableCors({
    origin: '*', // Разрешить запросы со всех доменов
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Разрешенные методы
    credentials: false, // Отключить передачу кук и заголовков авторизации
  });

  // Запустите приложение
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}

bootstrap();
