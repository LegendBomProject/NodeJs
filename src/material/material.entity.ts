import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('material')
export class material {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    materialNo?: number;

    @Column()
    altBom?: number;

    @Column()
    baseQty?: number;

    @Column()
    UOM?: string;

    @Column()
    plant?: string;

    @Column()
    createdBy?: string;

    @Column({default:0})
    status: number;

    @Column()
    Approvedby?: string;

    @Column()
    isDeleted?: string;

    @Column()
    isSubmit?: boolean;

    @Column()
    createdOn?: string;
}


