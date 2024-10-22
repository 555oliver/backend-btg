import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';
import * as bcryptjs from 'bcryptjs';
import { LoginUsuarioDto } from './dto/logn-usuario.dto';
@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuariosModel: Model<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    createUsuarioDto.nombre_usuario =
      createUsuarioDto.nombre_usuario.toLocaleLowerCase();
    try {
      const { password, ...userData } = createUsuarioDto;
      const usuarios = await this.usuariosModel.create({
        password: bcryptjs.hashSync(password, 10),
        ...userData,
      });
      return usuarios;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async login(loginUserDto: LoginUsuarioDto){
    const {password, correo} = loginUserDto;
    const user = await this.usuariosModel.findOne({correo})
    if(!user)
      throw new UnauthorizedException('Credenciales No validas (correo)')
    if(!bcryptjs.compareSync(password, user.password))
      throw new UnauthorizedException('Credenciales No validas (password)')
    
    return user;
  }

  findAll() {
    return this.usuariosModel.find().populate('fondos').exec();
  }

  findOne(id: string) {
    return this.usuariosModel.findById(id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
