import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { material } from "./material.entity";

@Injectable()
export class materialService {
    constructor(
        @InjectRepository(material)
        private readonly materialRepository: Repository<material>,
    ) { }

    async all(): Promise<material[]> {
        return this.materialRepository.find();
    }

    async create(data): Promise<material> {
        return this.materialRepository.save(data);
    }

    async get(id: number): Promise<material> {
        return this.materialRepository.findOne({ id });
    }

    async update(id: number, data): Promise<any> {
        return this.materialRepository.update(id, data);
    }

    async delete(id: number): Promise<any> {
        return this.materialRepository.delete(id);
    }
}
