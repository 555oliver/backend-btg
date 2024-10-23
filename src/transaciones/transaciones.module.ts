import { Module } from '@nestjs/common';
import { TransacionesService } from './transaciones.service';
import { TransacionesController } from './transaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transacione, TransacionesSchema } from './entities/transacione.entity';
import { Fondo, FondoSchema } from 'src/fondos/entities/fondo.entity';

@Module({
  controllers: [TransacionesController],
  providers: [TransacionesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Transacione.name,
        schema: TransacionesSchema
      },
      {
        name: Fondo.name,
        schema: FondoSchema
      }
    ])
  ]
})
export class TransacionesModule {}
