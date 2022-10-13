import { Postre } from "src/postres/entities/postre.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receta {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    ingredientes: string;
    @Column()
    receta: string;
    @Column()
    tiempo: string;
    @Column()
    dificultad: string;
    @ManyToOne(()=> Postre, (postre)=> postre.recetas)
    postre:Postre; 

}

