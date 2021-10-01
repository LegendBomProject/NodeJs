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
        @Body('itemBomNO') itemBomNO: number,
        @Body('componenetNo') componenetNo: number,
        @Body('quantity') quantity: number,
        @Body('UOM') UOM: string,
        @Body('explosionType') explosionType: string,
        @Body('relOfCosting') relOfCosting: boolean,
        @Body('dayInProgress') dayInProgress: number,
        @Body('relOfProd') relOfProd: boolean,
    ) {
        return this.componentService.create({
            itemBomNO,
            componenetNo,
            quantity,
            UOM,
            explosionType,
            relOfCosting,
            dayInProgress,
            relOfProd
        });;
    }

    @Get(':id')
    async get(@Param('id') id: number) {
        return this.componentService.get(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body('itemBomNO') itemBomNO: number,
        @Body('componenetNo') componenetNo: number,
        @Body('quantity') quantity: number,
        @Body('UOM') UOM: string,
        @Body('explosionType') explosionType: string,
        @Body('relOfCosting') relOfCosting: boolean,
        @Body('dayInProgress') dayInProgress: number,
        @Body('relOfProd') relOfProd: boolean,
    ) {
        return this.componentService.update(id, {
            itemBomNO,
            componenetNo,
            quantity,
            UOM,
            explosionType,
            relOfCosting,
            dayInProgress,
            relOfProd
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.componentService.delete(id);
    }
}