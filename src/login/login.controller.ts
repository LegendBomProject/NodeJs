import { Body, Controller, Get, Param, Post, Put,Request,Response } from '@nestjs/common';
import { loginService } from './login.service';
import { LoginUserDto } from './user-login.dto';

@Controller('login')
export class loginController {
  constructor(private loginService: loginService) { }

  @Get()
  all() {
    return this.loginService.all();
  }
 


  @Post()
  public async login(@Body() loginUserDto: LoginUserDto) {
    return await this.loginService.login(loginUserDto);
  }
}

