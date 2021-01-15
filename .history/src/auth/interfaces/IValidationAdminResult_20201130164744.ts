import { AdminDto } from "./dto/AdminDto";

export interface IValidationAdminResult {
    isValid: boolean;
    entity: AdminDto;
}