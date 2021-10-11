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
import { Request, Response,} from 'express';
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
    
    if(!data)
    {
      res.json({
        statuscode:403,
        data:data,
        status:true
      });
    }
    res.json({
      statuscode:201,
      data:data,
      status:true
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
    console.log(userid)
    const data= await this.materialService.materialDetail(userid,materialid);
    console.log(data);
    // if(!data.materialdata)
    // {
    //   res.json({
    //     statuscode:403,
    //     data:[],
    //     status:true
    //   });
    // }
    res.json({
      statuscode:201,
      data:{data},
      status:true
    });    
  }

  @Post()
  async createMaterial(@Body() data: MaterialDTO) {
      const createddata = await this.materialService.create(data);
      return {
        statusCode:201,
        data:{
            material: createddata.material,
            component: createddata.component
        }
      };
  }
  

  @Put(':materialid')
  async updateMaterial(
    @Param('materialid') materialid: number,
    @Body() data: MaterialDTO,
    ) {
    console.log(data)
    const createddata = await this.materialService.update(materialid,data);
    return {
      statusCode:201,
      data:{
      material: createddata
           // component: createddata.component
      }
    };
  }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   return this.materialService.delete(id);
  // }

}