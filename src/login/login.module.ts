import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { loginController } from "./login.controller";
import { login } from "./login.entity";
import { loginService } from "./login.service";

@Module({
    imports:[
        TypeOrmModule.forFeature([login])
    ],
    controllers: [loginController],
    providers: [loginService]
})
export class loginModule {}
