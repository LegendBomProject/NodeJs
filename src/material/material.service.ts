import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { component } from "src/component/component.entity";
import { Repository } from "typeorm";
import { MaterialDTO } from "./Material.dto";
import { material } from "./material.entity";
import { HttpStatus } from '@nestjs/common';
@Injectable()
export class materialService {
    constructor(
        @InjectRepository(material)private readonly materialRepository: Repository<material>,
        @InjectRepository(material)private readonly componentRepository: Repository<component>,
    ) { }

    async all(): Promise<material[]> {
        return this.materialRepository.find();
    }
//Promise<any>  components
    async create({ materialNo, altBom }: MaterialDTO): Promise<any> {
        const material=this.materialRepository.create({
            materialNo,
            altBom,
            baseQty:3,
            // UOM,
            // plant,
            // createdBy,
            // Status,
            // ApprovedBy,
            // DeletedMaterial,
          });

        const materialdata=await this.materialRepository.save(material);
       
        const id=materialdata[0].id;
        const componentlist=[];
        // for(let i=0;i<components.length;i++)
        // {
        //     const component= this.componentRepository.create(components[i]);
        //     component.materialId=id;
        //     componentlist.push(component);
        // }

        const compprom=componentlist.map(async ele=>await this.materialRepository.save(ele));
        const copmlist=await Promise.all(compprom);
        //  return
        //  {
        //    // statusCode: HttpStatus.OK,
        //     data:{
        //         material:material;
        //         componennt:copmlist;
        //     }
        //  }

        return materialdata;

    }

    // async get(id: number): Promise<material> {
    //     return this.materialRepository.findOne({ id });
    // }

    // async update(id: number, data): Promise<any> {
    //     return this.materialRepository.update(id, data);
    // }

    // async delete(id: number): Promise<any> {
    //     return this.materialRepository.delete(id);
    // }
}
