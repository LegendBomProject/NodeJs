import { material } from 'src/material/material.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('component')
export class component {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => material, m => m.id)
    // materialId?: number;

    @Column({ nullable: true })
    materialNo?: number;

    @Column({ nullable: true })
    itemBomNO?: number;

    @Column({ nullable: true })
    componenetNo?: number;

    @Column({ nullable: true })
    quantity?: number;

    @Column({ nullable: true })
    UOM?: string;

    @Column({ nullable: true })
    explosionType?: string;

    @Column({ nullable: true, default: false, select: false })
    relOfCosting: boolean;

    @Column({ nullable: true })
    dayInProgress: number;

    @Column({ nullable: true, default: false, select: false })
    relOfProd: boolean;

    @Column({ nullable: true })
    isDeleted?: string;
}