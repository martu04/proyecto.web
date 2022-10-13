import { PartialType } from '@nestjs/mapped-types';
import { CreateRecetaDto } from './create-receta.dto';

export class UpdateRecetaDto {
    ingredientes: string;
    receta: string;
    tiempo: string;
    dificultad: string;
}

