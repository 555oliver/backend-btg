import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: '*', // Cambia esto por la URL de tu frontend (Angular)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });
  await app.listen(process.env.PORT ?? 'PORT');
}
bootstrap();
