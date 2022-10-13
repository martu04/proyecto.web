import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Receta } from './entities/receta.entity';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetasRepository: Repository<Receta>,
  ) {}
  create(createRecetaDto: CreateRecetaDto) {
    return this.recetasRepository.save(createRecetaDto);
  }

  findAll() {
    
  return this.recetasRepository.find({ relations:{postre:true} })
    
  }

  async findOne(id: number) {
    const receta = await this.recetasRepository.findOneBy({id})
    if (receta==null) throw new HttpException("no se encotro la receta",HttpStatus.NOT_FOUND)
    return receta;
  }

  async update(id: number, updateRecetaDto: UpdateRecetaDto) {
    await this.recetasRepository.update({id}, updateRecetaDto)
    return await this.findOne(id); 
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.recetasRepository.delete({ id })
  }
}
