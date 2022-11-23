import { PartialType } from '@nestjs/mapped-types';
import { CreatePostreDto } from './create-postre.dto';

export class UpdatePostreDto {
    nombre: string;
    precio: number;
    stock: number;
    imagen: string;
}
