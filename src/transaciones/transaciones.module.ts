import { Module } from '@nestjs/common';
import { TransacionesService } from './transaciones.service';
import { TransacionesController } from './transaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transacione, UsuarioSchema } from './entities/transacione.entity';

@Module({
  controllers: [TransacionesController],
  providers: [TransacionesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Transacione.name,
        schema: UsuarioSchema
      }
    ])
  ]
})
export class TransacionesModule {}
