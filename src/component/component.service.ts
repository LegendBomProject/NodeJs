import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { component } from "./component.entity";

@Injectable()
export class componentService {
    constructor(
        @InjectRepository(component) private readonly componentRepository: Repository<component>
    ) { }
    async showAll(req, res): Promise<component[]> {
        const reqQuery = req.query;
        const findQuery = { materialId: reqQuery.materialId };
        const componentData = await this.componentRepository.find({ where: findQuery });
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

    async destroy(userid: number, id: number): Promise<any> {
        const deleteComponent = await this.componentRepository.delete(id);
        return { deleteComponent, delete: true };
    }
}