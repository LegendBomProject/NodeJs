import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { component } from 'src/component/component.entity';
import { component} from '../component/component.entity';
import { materialController } from './material.controller';
import { material } from './material.entity';
import { materialService } from './material.service';

@Module({
    imports: [TypeOrmModule.forFeature([material,component])],
    controllers: [materialController],
    providers: [materialService],
})
export class materialModule { }
