import { Test, TestingModule } from '@nestjs/testing';
import { RecetasController } from './recetas.controller';
import { RecetasService } from './recetas.service';
import * as dotenv from 'dotenv';
dotenv.config();

describe('RecetasController', () => {
  let controller: RecetasController;
  
  const mock = {
    
      recetas: [
        {
          id: 1,
          ingredientes: 'harina, huevo, leche',
          receta: 'mezclar todos los ingredientes',
          tiempo: '15 min',
          dificultad: 'Facil'  
        },
        {
          id: 3,
          ingredientes: 'premezcla,huevos,aceite',
          receta: 'batir',
          tiempo: '5 min',
          dificultad: 'Super Facil'
        },
      ],
      findAll() {
        return this.recetas;
      }, 
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetasController],
      providers: [RecetasService],  
    }).overrideProvider(RecetasService).useValue(mock).compile();

    controller = module.get<RecetasController>(RecetasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
 
  it('findAll => should return an array of Recetas', async () => {
    const result = await controller.findAll();
    expect(result).toEqual(mock.recetas);
});

});
