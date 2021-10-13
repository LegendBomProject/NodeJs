import { ComponentsDTO } from "src/component/components.dto";

export interface MaterialDTO {
    materialNo: number,
    altBom: number,
    baseQty: number;
    UOM: string;
    plant: string;
    createdBy: string;
    status: number;
    Approvedby: string;
    isDeleted: string;
    isSubmit: boolean;
    createdOn: string;
    components: ComponentsDTO[]
}