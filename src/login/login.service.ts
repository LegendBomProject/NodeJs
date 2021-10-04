import { Injectable,HttpException,HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { login } from "./login.entity";
import { LoginUserDto } from './user-login.dto';
import { comparePasswords } from '../common/util/utils'
@Injectable()
export class loginService {
    constructor(
        @InjectRepository(login) private readonly loginRepository: Repository<login>
    ) { }

    async all(): Promise<login[]> {
        return this.loginRepository.find();
    }
 
    async login({ userName, password }: LoginUserDto): Promise<login> {    
        let user = await this.loginRepository.findOne({ where: { userName } });
        
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        
        // compare passwords    
        const areEqual = await comparePasswords(user.password, password);
        
        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        user = Object.assign({},{"statusCode": 200},user);
        return user;  
    }
}