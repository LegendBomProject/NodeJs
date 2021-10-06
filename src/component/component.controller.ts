import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { componentService } from './component.service';
// import { ComponentsDTO } from './components.dto';

@Controller('components')
export class componentController {
    constructor(private componentService: componentService) { }

    @Get()
    async showAllComponents() {
        const components = await this.componentService.showAll();
        return {
            statuCode: HttpStatus.OK,
            message: "Components fetched successfully",
            components
        }
    }

    // @Post()
    // async createComponent(@Body() data: ComponentsDTO) {
    //     const component = await this.componentService.create(data);
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: "Component created successfully",
    //         component
    //     };
    // }

    @Get(':materialNo')
    async findById(@Param('materialNo') materialNo: number) {
        const data1 = await this.componentService.read(materialNo);
        return {
            statusCode: HttpStatus.OK,
            message: "Component fetch successfully.",
            data1
        };
    }

    // @Put(':id') //can we use @Patch
    // async updateComponent(@Param('id') id: number, @Body() data: ComponentsDTO) {
    //     await this.componentService.update(id, data);
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: "Component update successfully."
    //     }
    // }

    @Delete(':id')
    async deleteComponent(@Param('id') id: number) {
        await this.componentService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: "Component deleted successfully."
        };
    }
}