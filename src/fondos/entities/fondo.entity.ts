import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Schema()
export class Fondo extends Document {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;
  @Prop({
    required: true,
    index: true,
  })
  nombre_fondo: string;
  @Prop({
    required: true,
    index: true,
    default: 0,
  })
  monto_minimo: number;
  @Prop({
    index: true,
    default: 'activo',
  })
  estado: string;
  @Prop({
    index: true,
    required: true,
  })
  categoria_fondo: string;
}

export const FondoSchema = SchemaFactory.createForClass(Fondo);