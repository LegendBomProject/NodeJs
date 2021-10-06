import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { component } from "./component.entity";

@Injectable()
export class componentService {
    constructor(
        @InjectRepository(component) private readonly componentRepository: Repository<component>
    ) { }

    async showAll(): Promise<component[]> {
        return this.componentRepository.find();
    }

    async create(data): Promise<component[]> {
        const comp = this.componentRepository.create(data);
        await this.componentRepository.save(data);
        return comp;
    }

    async read(materialNo: number): Promise<any> {
        return await this.componentRepository.find({ materialNo });
    }

    async update(id: number, data): Promise<any> {
        await this.componentRepository.update(id, data);
        return await this.componentRepository.findOne(id);
    }

    async destroy(id: number): Promise<any> {
        await this.componentRepository.delete(id);
        return { delete: true };
    }
}