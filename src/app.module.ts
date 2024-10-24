import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { FondosModule } from './fondos/fondos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TransacionesModule } from './transaciones/transaciones.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(`mongodb+srv://olivercharry:j54eUpXd5jOfi1yj@btgclouter.zp9ge.mongodb.net/`),
    FondosModule,
    UsuariosModule,
    TransacionesModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
  ],
})
export class AppModule {}
