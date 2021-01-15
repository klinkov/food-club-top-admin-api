import { AdminDto } from "../../admin/dto/AdminDto";
export interface IValidationAdminResult {
    isValid: boolean;
    entity: AdminDto;
}
