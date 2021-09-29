import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { componentService } from './component.service';

@Controller('components')
export class componentController {
    constructor(private componentService: componentService) { }

    @Get()
    all() {
        return this.componentService.all();
    }

    @Post()
    create(
        @Body('itemBOMNumber') itemBOMNumber: number,
        @Body('componentNumber') componentNumber: number,
        @Body('quantity') quantity: number,
        @Body('UOM') UOM: string,
        @Body('ExponsionType') ExponsionType: string,
        @Body('RelForCosting') RelForCosting: boolean,
        @Body('dayInProcess') dayInProcess: number,
        @Body('RelOfProd') RelOfProd: boolean,
    ) {
        return this.componentService.create({
            itemBOMNumber,
            componentNumber,
            quantity,
            UOM,
            ExponsionType,
            RelForCosting,
            dayInProcess,
            RelOfProd
        });
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.componentService.get(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('itemBOMNumber') itemBOMNumber: number,
        @Body('componentNumber') componentNumber: number,
        @Body('quantity') quantity: number,
        @Body('UOM') UOM: string,
        @Body('ExponsionType') ExponsionType: string,
        @Body('RelForCosting') RelForCosting: boolean,
        @Body('dayInProcess') dayInProcess: number,
        @Body('RelOfProd') RelOfProd: boolean,
    ) {
        return this.componentService.update(id, {
            itemBOMNumber,
            componentNumber,
            quantity,
            UOM,
            ExponsionType,
            RelForCosting,
            dayInProcess,
            RelOfProd
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.componentService.delete(id);
    }
}