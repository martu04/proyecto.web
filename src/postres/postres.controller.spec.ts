import { Test, TestingModule } from '@nestjs/testing';
import { PostresController } from './postres.controller';
import { PostresService } from './postres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postre } from './entities/postre.entity';
import { Receta } from 'src/recetas/entities/receta.entity';
import * as dotenv from 'dotenv';
dotenv.config();


describe('PostresController', () => {
  let controller: PostresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostresController],
      providers: [PostresService],
      imports:[TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Postre, Receta],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Postre]),
    ] 
    }).compile();

    controller = module.get<PostresController>(PostresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
