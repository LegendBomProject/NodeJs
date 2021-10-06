import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
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

    @Get(':id')
    async findById(@Param('id') materialId: number) {
        const data = await this.componentService.read(materialId);
        return {
            statusCode: HttpStatus.OK,
            message: "Component fetch successfully by material no.",
            data
        };
    }

    @Delete(':id')
    async deleteComponent(@Param('id') id: number) {
        await this.componentService.destroy(id);
        return {
            statusCode: HttpStatus.OK,
            message: "Component deleted successfully."
        };
    }
}