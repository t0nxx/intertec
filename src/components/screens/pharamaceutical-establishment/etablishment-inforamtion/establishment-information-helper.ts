import * as yup from "yup";
/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  establishmentName: string;
  establishmentNameArabic: string;
  establishmentType: string;
  Category: string;
}
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  establishmentName: yup.string().required("this is required "),
  establishmentNameArabic: yup.string().required("this is required "),
  establishmentType: yup.string().required("this is required "),
  Category: yup.string().required("this is required "),
});
