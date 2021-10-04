import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class login {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    roleId: number;

    @Column()
    userName: string;

    @Column()
    password: string;
	
	@Column({ nullable: true })
	emailId?:string ;
    
	@Column({ nullable: true }) 
	description?:string;
}