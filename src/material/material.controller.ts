import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MaterialDTO } from './Material.dto';
import { materialService } from "./material.service";

@Controller('materials')
export class materialController {
  constructor(private materialService: materialService) { }

  @Get()
  all() {
    return this.materialService.all();
  }

  // @Post()
  // create(
  //   @Body('materialNumber') materialNumber: number,
  //   @Body('altBOM') altBOM: number,
  //   @Body('baseQty') baseQty: number,
  //   @Body('UOM') UOM: string,
  //   @Body('plant') plant: string,
  //   @Body('createdBy') createdBy: string,
  //   @Body('Status') Status: string,
  //   @Body('ApprovedBy') ApprovedBy: string,
  //   @Body('DeletedMaterial') DeletedMaterial: string,
  // ) {
  //   return this.materialService.create({
  //     materialNumber,
  //     altBOM,
  //     list[]
  //     // baseQty,
  //     // UOM,
  //     // plant,
  //     // createdBy,
  //     // Status,
  //     // ApprovedBy,
  //     // DeletedMaterial,
  //   });
  // }

  // @Post()
  // async createMaterial(@Body() data: MaterialDTO) {
  //     const component = await this.materialService.create(data);
  //     return {
  //         statusCode: HttpStatus.OK,
  //         message: "Component created successfully",
  //         component
  //     };
  // }

  @Post()
  public async createMaterial(@Body() MaterialDTO: MaterialDTO) {
    //return await this.materialService.create(MaterialDTO);

    return {
      //statuCode: 200,
      message: "Components fetched successfully",
      
  }

  // @Get(':id')
  // async get(@Param('id') id: number) {
  //   return this.materialService.get(id);
  // }

  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body('materialNumber') materialNumber: number,
  //   @Body('altBOM') altBOM: number,
  //   @Body('baseQty') baseQty: number,
  //   @Body('UOM') UOM: string,
  //   @Body('plant') plant: string,
  //   @Body('createdBy') createdBy: string,
  //   @Body('Status') Status: string,
  //   @Body('ApprovedBy') ApprovedBy: string,
  //   @Body('DeletedMaterial') DeletedMaterial: string,
  // ) {
  //   return this.materialService.update(id, {
  //     materialNumber,
  //     altBOM,
  //     baseQty,
  //     UOM,
  //     plant,
  //     createdBy,
  //     Status,
  //     ApprovedBy,
  //     DeletedMaterial,
  //   });
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: number) {
  //   return this.materialService.delete(id);
  // }
}
}