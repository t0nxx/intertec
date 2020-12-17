import * as yup from "yup";
import { ValidationMsgEnum } from "../../../constants/errors/validation-msg";

/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  reason: string;
}

export const locationInformationInitialState: FormInputsInterface = {
  reason: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  reason: yup.string().required(ValidationMsgEnum.Required),
});
