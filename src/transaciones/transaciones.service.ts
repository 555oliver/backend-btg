import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTransacioneDto } from './dto/create-transacione.dto';
import { UpdateTransacioneDto } from './dto/update-transacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transacione } from './entities/transacione.entity';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class TransacionesService {
  constructor(
    @InjectModel(Transacione.name)
    private readonly transacioneModel: Model<Transacione>,
  ) {}
  async create(createTransacioneDto: CreateTransacioneDto) {
    const transaciones =
      await this.transacioneModel.create(createTransacioneDto);
      
    return transaciones;
  }

  findAll() { 
    const sortOrder = -1; // 1 para ascendente, -1 para descendente
    return this.transacioneModel
      .find()
      .sort({ fecha_creacion: sortOrder })
      .populate('fondo')
      .populate('usuario')
      .exec();
  }

  findOne(id: string) {
    const sortOrder = -1; // 1 para ascendente, -1 para descendente
    return this.transacioneModel
      .findById(id)
      .sort({ fecha_creacion: sortOrder })
      .populate('fondo')
      .populate('usuario')
      .exec();
  }

  async update(id: string, updateTransacioneDto: UpdateTransacioneDto) {
    const transacion = await this.transacioneModel.findById(id);
    if (!transacion)
      throw new UnauthorizedException(
        `No se encontro esa transacción con id ${id}`,
      );

    await transacion.updateOne(updateTransacioneDto);
    return {...transacion.toJSON(), ...updateTransacioneDto};
  }

  remove(id: number) {
    return `This action removes a #${id} transacione`;
  }
}
