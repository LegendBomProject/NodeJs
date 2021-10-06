import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { loginController } from "./login.controller";
import { user } from "../user/user.entity";
import { loginService } from "./login.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([user])
    ],
    controllers: [loginController],
    providers: [loginService]
})
export class loginModule {}
