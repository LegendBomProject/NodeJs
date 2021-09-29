import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { component } from "./component.entity";

@Injectable()
export class componentService {
    constructor(
        @InjectRepository(component) private readonly componentRepository: Repository<component>
    ) { }

    async all(): Promise<component[]> {
        return this.componentRepository.find();
    }

    async create(data): Promise<component> {
        return this.componentRepository.save(data);
    }

    async get(id: number): Promise<component> {
        return this.componentRepository.findOne({ id });
    }

    async update(id: number, data): Promise<any> {
        return this.componentRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.componentRepository.delete(id);
    }
}