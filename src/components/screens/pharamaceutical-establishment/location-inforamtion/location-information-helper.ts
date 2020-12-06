import * as yup from "yup";
/**
 * Form interface for type def
 */
export interface FormInputsInterface {
  emirate: string;
  area: string;
  street: string;
  poBox: string;
  buildingName: string;
  buildingNo: string;
  mapUrl: string;
}

export const locationInformationInitialState: FormInputsInterface = {
  emirate: "",
  area: "",
  street: "",
  poBox: "",
  buildingName: "",
  buildingNo: "",
  mapUrl: "",
};
/**
 * Validation Schema with  err msg en or ar..
 */
export const formSchema = yup.object().shape({
  emirate: yup.string().required("this is required "),
  area: yup.string().required("this is required "),
  street: yup.string().required("this is required "),
  poBox: yup.string().required("this is required "),
  buildingName: yup.string().required("this is required "),
  buildingNo: yup.string().required("this is required "),
  mapUrl: yup.string().required("this is required "),
});
