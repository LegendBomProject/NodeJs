

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req, Res
} from '@nestjs/common';
import { MaterialDTO } from './Material.dto';
import { materialService } from "./material.service";
import { Request, Response, } from 'express';
@Controller('materials')
export class materialController {
  constructor(private materialService: materialService) { }

  @Get(':userid')
  async all(
    @Req() req: Request,
    @Res() res: Response,
    @Param('userid') userid: number
  ) {
    
    const data= await this.materialService.all(userid);

    res.json({
      statusCode:201,
      data:data,
      status:true,
      message:"data sent"
    });
    //material: materialdata
  }

  @Get(':userid/:materialid')
  async getMaterialDetail(
    @Req() req: Request,
    @Res() res: Response,
    @Param('userid') userid: number,
    @Param('materialid') materialid: number,

  ) {
  
    const data= await this.materialService.materialDetail(userid,materialid);
    data.material.components=data.component
    delete data.component
    res.json({
      statuscode:201,
      data,
      status:true,
      message:"data sent"
    });    
  }

  @Post()
  async createMaterial(@Body() data: MaterialDTO) {
      const createddata = await this.materialService.create(data);

      createddata.material.components=createddata.component
      delete createddata.component
      return {
        statusCode:201,
        data:{
            material: createddata.material,
        },
        status:true,
        message:"data added successfully."
      };
  }


  @Put(':materialid')
  async updateMaterial(
    @Param('materialid') materialid: number,
    @Body() indata: MaterialDTO,
    ) {
      let message="";
    if(indata.isSubmit===true)
    {
      message="data submitted successfully."
    }
    else{
      message="data updated successfully."
    }
    const data = await this.materialService.update(materialid,indata);
    data.material.components=data.component
    delete data.component
    return {
      statusCode:201,
      data,
      status:true,
      message:message
      }
    };

}


  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   return this.materialService.delete(id);
  // }

