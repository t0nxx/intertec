/* eslint-disable @typescript-eslint/comma-dangle */

import { locationInformationInitialState } from "../../../components/pages/pharamaceutical-establishment-screen/location-inforamtion/location-information-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = {
  data: locationInformationInitialState,
  isComplete: false,
};

const locationInformationsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_LOACTION_INFORMATION:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default locationInformationsReducer;
