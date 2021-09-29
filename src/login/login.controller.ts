import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { loginService } from './login.service';

@Controller('login')
export class loginController {
  constructor(private loginService: loginService) { }

  @Get()
  all() {
    return this.loginService.all();
  }
}

