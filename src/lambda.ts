import serverlessExpress from 'aws-serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedServer;

export const handler = async (event,context) => {
  if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule); 
    nestApp.setGlobalPrefix('api/v1');
    nestApp.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    });
    await nestApp.init();
    cachedServer = serverlessExpress({
        app: nestApp.getHttpAdapter().getInstance()
    });
  }
  return cachedServer(event, context);
}


