import * as yup from "yup";
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

export const ownerDetailInitialState: FormInputsInterface = {
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
  getInfoFromProfile: yup.string().required("this is required "),
  tite: yup.string().required("this is required "),
  gender: yup.string().required("this is required "),
  fName: yup.string().required("this is required "),
  mName: yup.string().required("this is required "),
  lName: yup.string().required("this is required "),
  fNameAr: yup.string().required("this is required "),
  mNameAr: yup.string().required("this is required "),
  lNameAr: yup.string().required("this is required "),
  sharePercentage: yup.string().required("this is required "),
  uaeCitzen: yup.string().required("this is required "),
  nationality: yup.string().required("this is required "),
  passportNo: yup.string().required("this is required "),
  emiratesId: yup.string().required("this is required "),
  familyBookNo: yup.string().required("this is required "),
  contactNo: yup.string().required("this is required "),
  primaryEmail: yup.string().email().required("this is required "),
});
