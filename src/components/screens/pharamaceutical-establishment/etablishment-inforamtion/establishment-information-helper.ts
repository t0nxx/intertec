import * as yup from "yup";
import { ValidationMsgEnum } from "../../../errors/validation-msg";
/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  establishmentName: string;
  establishmentNameArabic: string;
  establishmentType: string;
  Category: string;
}

export const establishmentInformationIntialState: FormInputsInterface = {
  establishmentName: "",
  establishmentNameArabic: "",
  establishmentType: "",
  Category: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  establishmentName: yup.string().required(ValidationMsgEnum.Required),
  establishmentNameArabic: yup.string().required(ValidationMsgEnum.Required),
  establishmentType: yup.string().required(ValidationMsgEnum.Required),
  Category: yup.string().required(ValidationMsgEnum.Required),
});
