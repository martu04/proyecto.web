import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postre } from './postres/entities/postre.entity';
import { PostresModule } from './postres/postres.module';
import { Receta } from './recetas/entities/receta.entity';
import { RecetasModule } from './recetas/recetas.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [PostresModule, RecetasModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Postre, Receta],
    synchronize: true,
  }),
],
  controllers: [AppController],
  providers: [AppService],
  
})

export class AppModule {}


