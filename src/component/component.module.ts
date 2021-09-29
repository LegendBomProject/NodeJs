import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { componentController } from './component.controller';
import { component } from './component.entity';
import { componentService } from './component.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([component])
    ],
    controllers: [componentController],
    providers: [componentService]
})
export class componentModule { }