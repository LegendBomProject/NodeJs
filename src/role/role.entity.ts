import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,BeforeInsert } from 'typeorm';

@Entity('role')
export class role {
    @PrimaryGeneratedColumn() roleId: number;
    @Column({ type: 'varchar', nullable: false, unique: true }) roleName: string;
    @Column({ type: 'varchar', nullable: true }) emailId?: string;
    @Column({ type: 'varchar', nullable: true }) description?: string;
    @Column({type:'bool', default:0 }) isActive: boolean;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;
}