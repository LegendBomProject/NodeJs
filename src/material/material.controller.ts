import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { materialService } from "./material.service";

@Controller('materials')
export class materialController {
  constructor(private materialService: materialService) { }

  @Get()
  all() {
    return this.materialService.all();
  }

  @Post()
  create(
    @Body('materialNumber') materialNumber: number,
    @Body('altBOM') altBOM: number,
    @Body('baseQty') baseQty: number,
    @Body('UOM') UOM: string,
    @Body('plant') plant: string,
    @Body('createdBy') createdBy: string,
    @Body('Status') Status: string,
    @Body('ApprovedBy') ApprovedBy: string,
    @Body('DeletedMaterial') DeletedMaterial: string,
  ) {
    return this.materialService.create({
      materialNumber,
      altBOM,
      baseQty,
      UOM,
      plant,
      createdBy,
      Status,
      ApprovedBy,
      DeletedMaterial,
    });
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.materialService.get(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('materialNumber') materialNumber: number,
    @Body('altBOM') altBOM: number,
    @Body('baseQty') baseQty: number,
    @Body('UOM') UOM: string,
    @Body('plant') plant: string,
    @Body('createdBy') createdBy: string,
    @Body('Status') Status: string,
    @Body('ApprovedBy') ApprovedBy: string,
    @Body('DeletedMaterial') DeletedMaterial: string,
  ) {
    return this.materialService.update(id, {
      materialNumber,
      altBOM,
      baseQty,
      UOM,
      plant,
      createdBy,
      Status,
      ApprovedBy,
      DeletedMaterial,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.materialService.delete(id);
  }
}