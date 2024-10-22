import { Injectable } from '@nestjs/common';
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
    const transaciones = await this.transacioneModel.create(createTransacioneDto);
    console.log(transaciones);
    
    return transaciones;
  }

  findAll() {
    return this.transacioneModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transacione`;
  }

  update(id: number, updateTransacioneDto: UpdateTransacioneDto) {
    return `This action updates a #${id} transacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} transacione`;
  }
}
