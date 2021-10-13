import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';

@Entity('approvalStatus')
export class approvalStatus {
    @PrimaryGeneratedColumn() id: number;
    @Column({ type: 'varchar', nullable: false }) user: string;
    @Column({ type: 'varchar', nullable: false }) action: string;
    @Column({ type: 'varchar', nullable: false }) status: string;
    @Column({ default: 0 }) code: number;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;
}