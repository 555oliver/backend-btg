import { isEmail, IsEmail, IsInt, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { Fondo } from 'src/fondos/entities/fondo.entity';

export class LoginUsuarioDto {
  @IsString()
  @IsEmail()
  correo: string;
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  password: string;
}
