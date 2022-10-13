import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postre } from './postres/entities/postre.entity';
import { PostresModule } from './postres/postres.module';
import { Receta } from './recetas/entities/receta.entity';
import { RecetasModule } from './recetas/recetas.module';

@Module({
  imports: [PostresModule, RecetasModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'pasteleria',
    password: '280404',
    database: 'pasteleria',
    entities: [Postre, Receta],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


