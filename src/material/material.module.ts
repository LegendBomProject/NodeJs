import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { materialController } from './material.controller';
import { material } from './material.entity';
import { materialService } from './material.service';

@Module({
    imports: [TypeOrmModule.forFeature([material])],
    controllers: [materialController],
    providers: [materialService],
})
export class materialModule { }
