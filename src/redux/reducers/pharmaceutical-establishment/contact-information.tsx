/* eslint-disable @typescript-eslint/comma-dangle */

import { contactInformationInitailState } from "../../../components/pages/pharamaceutical-establishment-screen/contact-inforamtion/contact-information-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = {
  data: contactInformationInitailState,
  isComplete: false,
};

const contactInformationsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_CONTACT_INFORMATION:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default contactInformationsReducer;
