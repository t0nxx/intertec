import * as yup from "yup";
/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  getInfoFromProfile : string;
  contactName: string;
  designation: string;
  primaryEmail: string;
  alternativeEmail: string;
  contactNumber : string;
  alternativeContactNumber : string;
  fax : string;

}
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  // i'm not setting validation for getInfoFromProfile cause it by default selected one from the 2 radio buttons
  getInfoFromProfile : yup.string().optional(),
  contactName: yup.string().required("this is required "),
  designation: yup.string().required("this is required "),
  primaryEmail: yup.string().email().required("this is required "),
  alternativeEmail: yup.string().email().required("this is required "),
  contactNumber: yup.string().required("this is required "),
  alternativeContactNumber: yup.string().required("this is required "),
  fax: yup.string().optional(),
});

