import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { login } from "./login.entity";

@Injectable()
export class loginService {
    constructor(
        @InjectRepository(login) private readonly loginRepository: Repository<login>
    ) { }

    async all(): Promise<login[]> {
        return this.loginRepository.find();
    }
}