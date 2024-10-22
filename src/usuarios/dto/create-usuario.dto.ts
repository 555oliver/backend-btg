import { IsArray, IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';
import { Fondo } from 'src/fondos/entities/fondo.entity';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(1)
  nombre_usuario: string;
  @IsString()
  @MinLength(5)
  correo: string;
  @IsInt()
  @Min(1)
  monto: number;
  @IsString()
  @MinLength(5)
  password: string;
  @IsArray()
  fondos: string[]
}
