import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { component } from "./component.entity";

@Injectable()
export class componentService {
    constructor(
        @InjectRepository(component) private readonly componentRepository: Repository<component>
    ) { }

    async showAll(userid: number, materialid: number): Promise<any> {
        console.log('materialid', materialid);
        const componentData = await this.componentRepository.find();
        return componentData;
    }

    async read(userid: number, id: number): Promise<any> {
        const componentData = await this.componentRepository.find(
            { where: { id: id } }
        );
        return {
            componentData
        }
    }

    async destroy(id: number): Promise<any> {
        await this.componentRepository.delete(id);
        return { delete: true };
    }
}