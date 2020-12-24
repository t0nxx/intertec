import * as yup from "yup";
import { ValidationMsgEnum } from "../../../../constants/errors/validation-msg";

/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  image: string;
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
  image: "",
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
  image: yup.string().optional(),
  tite: yup.string().required(ValidationMsgEnum.Required),
  gender: yup.string().required(ValidationMsgEnum.Required),
  fName: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, ValidationMsgEnum.MustBeOnlyCharachters)
    .required(ValidationMsgEnum.Required),
  mName: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, ValidationMsgEnum.MustBeOnlyCharachters)
    .required(ValidationMsgEnum.Required),
  lName: yup
    .string()
    .matches(/^[a-zA-Z ]+$/, ValidationMsgEnum.MustBeOnlyCharachters)
    .required(ValidationMsgEnum.Required),
  fNameAr: yup
    .string()
    .matches(/^[ء-ي ]+$/, ValidationMsgEnum.MustBeOnlyArabicCharachters)
    .required(ValidationMsgEnum.Required),
  mNameAr: yup
    .string()
    .matches(/^[ء-ي ]+$/, ValidationMsgEnum.MustBeOnlyArabicCharachters)
    .required(ValidationMsgEnum.Required),
  lNameAr: yup
    .string()
    .matches(/^[ء-ي ]+$/, ValidationMsgEnum.MustBeOnlyArabicCharachters)
    .required(ValidationMsgEnum.Required),
  sharePercentage: yup.string().required(ValidationMsgEnum.Required),
  uaeCitzen: yup.string().required(ValidationMsgEnum.Required),
  nationality: yup.string().required(ValidationMsgEnum.Required),
  passportNo: yup.string().required(ValidationMsgEnum.Required),
  emiratesId: yup
    .string()
    .matches(
      /[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}/,
      ValidationMsgEnum.EmirateIdMustBeLike
    )
    .required(ValidationMsgEnum.Required),
  // optional if uae uaeCitzen is true

  familyBookNo: yup.string().optional(),
  contactNo: yup
    .string()
    .matches(/\+971\-[0-9]{9}/, ValidationMsgEnum.PhoneNumberMustBeLike)
    .required(ValidationMsgEnum.Required),
  primaryEmail: yup
    .string()
    .email(ValidationMsgEnum.MustBeValidEmail)
    .required(ValidationMsgEnum.Required),
});
