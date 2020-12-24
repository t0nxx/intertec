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
  getInfoFromProfile: "Yes",
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
  contactName: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, ValidationMsgEnum.MustBeOnlyCharachters)
    .required(ValidationMsgEnum.Required),
  designation: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, ValidationMsgEnum.MustBeOnlyCharachters)
    .required(ValidationMsgEnum.Required),
  primaryEmail: yup
    .string()
    .email(ValidationMsgEnum.MustBeValidEmail)
    .required(ValidationMsgEnum.Required),
  alternativeEmail: yup
    .string()
    .email(ValidationMsgEnum.MustBeValidEmail)
    .notOneOf([yup.ref("primaryEmail")], ValidationMsgEnum.AlternativeEmailCantBeSamePrimary)
    .required(ValidationMsgEnum.Required),
  contactNumber: yup
    .string()
    .matches(/\+971\-[0-9]{9}/, ValidationMsgEnum.PhoneNumberMustBeLike)
    .required(ValidationMsgEnum.Required),
  alternativeContactNumber: yup
    .string()
    .matches(/\+971\-[0-9]{9}/, ValidationMsgEnum.PhoneNumberMustBeLike)
    .notOneOf([yup.ref("contactNumber")], ValidationMsgEnum.AlternativeContactNumberBeSamePrimary)
    .required(ValidationMsgEnum.Required),
  fax: yup.string().optional(),
});
