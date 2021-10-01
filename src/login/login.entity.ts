import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class login {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userRole: number;

    @Column()
    userName: string;

    @Column()
    password: string;
	
	@Column({ nullable: true })
	emailId?:string ;
    
	@Column({ nullable: true }) 
	description?:string;

}