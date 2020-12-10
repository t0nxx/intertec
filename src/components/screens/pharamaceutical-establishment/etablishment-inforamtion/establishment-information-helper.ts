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
  establishmentName: yup.string().required("Error.this is required"),
  establishmentNameArabic: yup.string().required("Error.this is required"),
  establishmentType: yup.string().required("Error.this is required"),
  Category: yup.string().required("Error.this is required"),
});
