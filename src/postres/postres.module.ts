import { Module } from '@nestjs/common';
import { PostresService } from './postres.service';
import { PostresController } from './postres.controller';
import { Postre } from './entities/postre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Postre])], 
  controllers: [PostresController],
  providers: [PostresService]
})
export class PostresModule {}
