import * as yup from "yup";
/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
}

export const ownerDetailInitialState: FormInputsInterface = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  q1: yup.string().required("this is required "),
  // q2: yup.string().required("this is required "),
  // q3: yup.string().required("this is required "),
  // q4: yup.string().required("this is required "),
  // q5: yup.string().required("this is required "),
});
