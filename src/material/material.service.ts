import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
//import { component } from "src/component/component.entity";
import { component} from '../component/component.entity';
import { Repository } from "typeorm";
import { MaterialDTO } from "./Material.dto";
import { material } from "./material.entity";
import { HttpStatus } from '@nestjs/common';
import { Request, Response,} from 'express';
@Injectable()
export class materialService {
    constructor(
        @InjectRepository(material) private readonly materialRepository: Repository<material>,
        @InjectRepository(component) private readonly componentRepository: Repository<component>,
    ) { }

    async all(userid:number): Promise<material[]> {
        const materialdata=await this.materialRepository.find(
            { where: { createdBy: userid } }
        );
        return materialdata;
        
    }

    async materialDetail(userid:number,materialid:number): Promise<any> {

        console.log(userid);
        console.log(materialid);
        const materialdata=await this.materialRepository.find(
            { where: { id:materialid } }
        );
//createdBy: userid ,
        console.log(materialdata);

        if(!materialdata.length)
        {
            return materialdata;
        }
        const componentdata=await this.componentRepository.find(
            { where: { materialId:materialid } }
        );
        return {
            material:materialdata,
            component:componentdata
        }      
    }

    async create({ materialNo, altBom, baseQty, UOM, plant, createdBy, status, Approvedby, 
        isDeleted, isSubmit, createdOn, components }: MaterialDTO): Promise<any> {
        const material = this.materialRepository.create({
            materialNo,
            altBom,
            baseQty, UOM, plant, createdBy, status, Approvedby, isDeleted, isSubmit, createdOn
        });

        const materialdata = await this.materialRepository.save(material);

        const id = materialdata.id;
        const componentlist = [];

        for (let i = 0; i < components.length; i++) {

            const component = this.componentRepository.create(components[i]);
            component.materialId = id;
            component.materialNo = materialNo;
            componentlist.push(this.componentRepository.save(component));
        }
    
        const copmlist = await Promise.all(componentlist);

        console.log(copmlist)
       return{
        material:materialdata,
        component:copmlist
       }

     }


    async update(id: number, { materialNo, altBom, baseQty, UOM, plant, createdBy, status, Approvedby, 
        isDeleted, isSubmit, createdOn, components }: MaterialDTO): Promise<any> {
            // const mat=new material;
          
            // mat.materialNo=materialNo;
            // mat.altBom=altBom;
            // mat.baseQty=baseQty;
            // mat.UOM=UOM;
            // mat.plant=plant;
            // mat.createdBy=createdBy;
            // mat.status=status;
            // mat.Approvedby=Approvedby;
            // mat.isDeleted=isDeleted;
            // mat.isSubmit=isSubmit;
            const material = this.materialRepository.create({
                materialNo,
                altBom,
                baseQty, UOM, plant, createdBy, status, Approvedby, isDeleted, isSubmit, createdOn
            });
            
         await this.materialRepository.update(id, material);

         const updatedMaterial=await this.materialRepository.find(
            { where: { id:id } }
        );

        const componentlist = [];
        for (let i = 0; i < components.length; i++) {

            if(!components[i].materialId)
            {
                const component = this.componentRepository.create(components[i]);
                 component.materialId = id;
                 componentlist.push(this.componentRepository.save(component));
            }
            else{
                
                this.componentRepository.update(components[i].id, components[i]);
            }

            await Promise.all(componentlist);

            const updatedComponentdata=await this.componentRepository.find(
                { where: { materialId:id } }
            );

            return{
                material:updatedMaterial,
                component:updatedComponentdata
               }

        }

    }

    // async delete(id: number): Promise<any> {
    //     return this.materialRepository.delete(id);
    // }
}
