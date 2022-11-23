import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostreDto } from './dto/create-postre.dto';
import { UpdatePostreDto } from './dto/update-postre.dto';
import { Postre } from './entities/postre.entity';

@Injectable()
export class PostresService {
  constructor(
    @InjectRepository(Postre)
    private postresRepository: Repository<Postre>,
  ) { }
  create(createPostreDto: CreatePostreDto) {
    return this.postresRepository.save(createPostreDto);
  }

  findAll() {
    return this.postresRepository.find( { relations: { recetas: true }});
  }

  async findOne(id: number) {
    const postre = await this.postresRepository.findOne({ where:{id}, relations:{recetas:true} })
    if (postre == null) throw new HttpException("no se encotro el postre", HttpStatus.NOT_FOUND)
    return postre;
  }

 async update(id: number, updatePostreDto: UpdatePostreDto) {
    await this.postresRepository.update({id}, updatePostreDto)
    return await this.findOne(id); 
  }

  async remove(id: number) {
    await this.findOne(id)
    await this.postresRepository.delete({ id })
  }
}

