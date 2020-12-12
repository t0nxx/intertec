import * as yup from "yup";
import { ValidationMsgEnum } from "../../../constants/errors/validation-msg";

/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  getInfoFromProfile: string;
  contactName: string;
  designation: string;
  primaryEmail: string;
  alternativeEmail: string;
  contactNumber: string;
  alternativeContactNumber: string;
  fax: string;
}

export const contactInformationInitailState: FormInputsInterface = {
  getInfoFromProfile: "",
  contactName: "",
  designation: "",
  primaryEmail: "",
  alternativeEmail: "",
  contactNumber: "",
  alternativeContactNumber: "",
  fax: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  // i'm not setting validation for getInfoFromProfile cause it by default selected one from the 2 radio buttons
  getInfoFromProfile: yup.string().optional(),
  contactName: yup.string().required(ValidationMsgEnum.Required),
  designation: yup.string().required(ValidationMsgEnum.Required),
  primaryEmail: yup.string().email(ValidationMsgEnum.MustBeValidEmail).required(ValidationMsgEnum.Required),
  alternativeEmail: yup.string().email(ValidationMsgEnum.MustBeValidEmail).required(ValidationMsgEnum.Required),
  contactNumber: yup.string().required(ValidationMsgEnum.Required),
  alternativeContactNumber: yup.string().required(ValidationMsgEnum.Required),
  fax: yup.string().optional(),
});
