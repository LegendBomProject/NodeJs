import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('component')
export class component {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    materialNumber?: number;

    @Column({ nullable: true })
    itemBOMNumber?: number;

    @Column({ nullable: true })
    componentNumber?: number;

    @Column({ nullable: true })
    quantity?: number;

    @Column({ nullable: true })
    UOM?: string;

    @Column({ nullable: true })
    ExponsionType?: string;

    @Column()
    RelForCosting: boolean;

    @Column()
    dayInProcess: number;

    @Column()
    RelOfProd: boolean;

    @Column({ nullable: true })
    deletedComponent?: string;
}