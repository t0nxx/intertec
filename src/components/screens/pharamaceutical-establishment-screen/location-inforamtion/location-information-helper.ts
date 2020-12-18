import * as yup from "yup";
import { ValidationMsgEnum } from "../../../constants/errors/validation-msg";

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
  emirate: yup.string().required(ValidationMsgEnum.Required),
  area: yup.string().required(ValidationMsgEnum.Required),
  street: yup.string().required(ValidationMsgEnum.Required),
  poBox: yup.string().required(ValidationMsgEnum.Required),
  buildingName: yup.string().required(ValidationMsgEnum.Required),
  buildingNo: yup.string().required(ValidationMsgEnum.Required),
  mapUrl: yup
    .string()
    .matches(
      /(https|http):\/\/(www\.|)google\.[a-z]+\/maps\/.*/,
      ValidationMsgEnum.MustBeValidGooglMapUrl
    )
    .required(ValidationMsgEnum.Required),
  // it should match also (https|http):\/\/(www\.|)goo.gl+\/maps\/.*
});
