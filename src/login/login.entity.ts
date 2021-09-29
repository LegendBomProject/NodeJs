import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class login {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userRole: number;

    @Column({ nullable: true })
    userName?: string;

    @Column({ nullable: true })
    password?: string;
}