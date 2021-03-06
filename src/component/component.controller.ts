import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { componentService } from './component.service';
import { Request, Response } from 'express';
// import { ComponentsDTO } from './components.dto';

@Controller('components')
export class componentController {
    constructor(private componentService: componentService) { }

    @Get()
    async showAllComponents(@Req() req: Request, @Res() res: Response) {
        const data = await this.componentService.showAll(req, res);
        res.status(200).send({
            statuscode: 200,
            data: data,
            success: true,
            message: "get Commponet list"
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

    @Delete(':userid/:id')
    async deleteComponent(
        @Req() req: Request,
        @Res() res: Response,
        @Param('userid') userid: number,
        @Param('id') id: number
    ) {
        const data = await this.componentService.destroy(userid, id);
        res.json({
            statuscode: 201,
            data: { data },
            status: true
        });
    }
}