import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { componentService } from './component.service';
import { Request, Response, } from 'express';
// import { ComponentsDTO } from './components.dto';

@Controller('components')
export class componentController {
    constructor(private componentService: componentService) { }

    @Get(':userid/:materialid')
    async showAllComponents(
        @Req() req: Request,
        @Res() res: Response,
        @Param('userid') userid: number,
        @Param('materialid') materialid: number
    ) {
        console.log('materialid==', materialid);
        const data = await this.componentService.showAll(userid, materialid);
        res.json({
            statuscode: 201,
            data: data,
            status: true
        });
    }

    @Get(':userid/:id')
    async findById(
        @Req() req: Request,
        @Res() res: Response,
        @Param('userid') userid: number,
        @Param('id') id: number
    ) {
        const data = await this.componentService.read(userid, id);
        res.json({
            statuscode: 201,
            data: { data },
            status: true
        });
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