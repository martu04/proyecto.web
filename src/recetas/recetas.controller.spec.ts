import { Test, TestingModule } from '@nestjs/testing';
import { RecetasController } from './recetas.controller';
import { RecetasService } from './recetas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postre } from 'src/postres/entities/postre.entity';
import { Receta } from './entities/receta.entity';
import * as dotenv from 'dotenv';
dotenv.config();

describe('RecetasController', () => {
  let controller: RecetasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetasController],
      providers: [RecetasService],
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
      TypeOrmModule.forFeature([Receta]),
    ] 
    }).compile();

    controller = module.get<RecetasController>(RecetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
