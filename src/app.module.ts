import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { FondosModule } from './fondos/fondos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TransacionesModule } from './transaciones/transaciones.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb+srv://olivercharry:j54eUpXd5jOfi1yj@btgclouter.zp9ge.mongodb.net/'),
    FondosModule,
    UsuariosModule,
    TransacionesModule
  ],
})
export class AppModule {}
