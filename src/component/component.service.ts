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

    async read(id: number): Promise<component[]> {
        return await this.componentRepository.find({ where: { materialId: id } });
    }

    async destroy(id: number): Promise<any> {
        await this.componentRepository.delete(id);
        return { delete: true };
    }
}