import { ComponentsDTO } from "src/component/components.dto";

export interface MaterialDTO {
    materialNo: number,
    altBom: number,
    components:ComponentsDTO[]
}