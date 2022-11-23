import { Receta } from "src/recetas/entities/receta.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Postre {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    precio: number;
    @Column()
    stock: number;
    @Column()
    imagen: string;
    @OneToMany(()=> Receta, (receta)=> receta.postre)
    recetas: Receta[]
    
} 

