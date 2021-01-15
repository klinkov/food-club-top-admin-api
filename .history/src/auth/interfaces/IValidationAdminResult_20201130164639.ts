import { AdminDto } from "src/admin/dto/AdminDto";

export interface IValidationAdminResult {
    isValid: boolean;
    entity: AdminDto;
}