import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,BeforeInsert } from 'typeorm';
//import * as bcrypt from 'bcrypt';

@Entity('user')
export class login {
    @PrimaryGeneratedColumn() userId: number;
    @Column() roleId: number;
    @Column({ type: 'varchar', nullable: false, unique: true }) userName: string;
    @Column({ type: 'varchar', nullable: false }) password: string;
    @Column({ type: 'varchar', nullable: true }) emailId?: string;
    @Column({ type: 'varchar', nullable: true }) description?: string;
    @CreateDateColumn() createdOn?: Date;
    @CreateDateColumn() updatedOn?: Date;

    // @BeforeInsert()
    // async hashPassword() {
    //     this.password = await bcrypt.hash(this.password, 10);
    // }
}