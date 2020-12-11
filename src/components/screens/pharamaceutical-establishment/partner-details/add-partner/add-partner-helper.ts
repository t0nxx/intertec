import * as yup from "yup";
import { ValidationMsgEnum } from "../../../../errors/validation-msg";

/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  getInfoFromProfile: string;
  tite: string;
  gender: string;
  fName: string;
  mName: string;
  lName: string;
  fNameAr: string;
  mNameAr: string;
  lNameAr: string;
  sharePercentage: string;
  uaeCitzen: string;
  nationality: string;
  passportNo: string;
  emiratesId: string;
  familyBookNo: string;
  contactNo: string;
  primaryEmail: string;
}

export const partnerDetailInitialState: FormInputsInterface = {
  getInfoFromProfile: "",
  tite: "",
  gender: "",
  fName: "",
  mName: "",
  lName: "",
  fNameAr: "",
  mNameAr: "",
  lNameAr: "",
  sharePercentage: "",
  uaeCitzen: "",
  nationality: "",
  passportNo: "",
  emiratesId: "",
  familyBookNo: "",
  contactNo: "",
  primaryEmail: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  // i'm not setting validation for getInfoFromProfile cause it by default selected one from the 2 radio buttons
  getInfoFromProfile: yup.string().optional(),
  tite: yup.string().required(ValidationMsgEnum.Required),
  gender: yup.string().required(ValidationMsgEnum.Required),
  fName: yup.string().required(ValidationMsgEnum.Required),
  mName: yup.string().required(ValidationMsgEnum.Required),
  lName: yup.string().required(ValidationMsgEnum.Required),
  fNameAr: yup.string().required(ValidationMsgEnum.Required),
  mNameAr: yup.string().required(ValidationMsgEnum.Required),
  lNameAr: yup.string().required(ValidationMsgEnum.Required),
  sharePercentage: yup.string().required(ValidationMsgEnum.Required),
  uaeCitzen: yup.string().required(ValidationMsgEnum.Required),
  nationality: yup.string().required(ValidationMsgEnum.Required),
  passportNo: yup.string().required(ValidationMsgEnum.Required),
  emiratesId: yup.string().required(ValidationMsgEnum.Required),
  familyBookNo: yup.string().required(ValidationMsgEnum.Required),
  contactNo: yup.string().required(ValidationMsgEnum.Required),
  primaryEmail: yup.string().email(ValidationMsgEnum.MustBeValidEmail).required(ValidationMsgEnum.Required),
});
