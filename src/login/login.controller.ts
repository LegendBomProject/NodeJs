import { Body, Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { loginService } from './login.service';
import { LoginUserDto } from './user-login.dto';
import { Request, Response } from 'express';

@Controller('login')
export class loginController {
  constructor(private loginService: loginService) { }

  @Get()
  all() {
    return this.loginService.all();
  }



  @Post()
  public async login(@Req() req: Request, @Res() res: Response) {
    const loginData = await this.loginService.login(req, res);
    return res.send({
      "statusCode": 200,
      "data": loginData,
      "success": true,
      "message": 'You are successfully logged in'
    });

  }

}

