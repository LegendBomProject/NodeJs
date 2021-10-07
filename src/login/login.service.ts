import { Injectable,HttpException,HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { user } from "../user/user.entity";
import { LoginUserDto } from './user-login.dto';
import { comparePasswords } from '../common/util/utils';
import { MailService }  from '../common/mail/mail.service'
@Injectable()
export class loginService {
    constructor(
        @InjectRepository(user) private readonly loginRepository: Repository<user>,
        private mailService: MailService
    ) { }

    async all(): Promise<user[]> {
        return this.loginRepository.find();
    }
 
    async login({ userName, password }: LoginUserDto): Promise<user> {    
        let user = await this.loginRepository.findOne({ where: { userName } });
        
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        
        // compare passwords    
        const areEqual = await comparePasswords(user.password, password);
        
        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        await this.mailService.sendUserConfirmation(user);
        user = Object.assign({},{"status": 200},user);
        return user;  
    }
}