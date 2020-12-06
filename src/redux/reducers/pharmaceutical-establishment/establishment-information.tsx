/* eslint-disable @typescript-eslint/comma-dangle */

import { establishmentInformationIntialState } from "../../../components/screens/pharamaceutical-establishment/etablishment-inforamtion/establishment-information-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = {
  data: establishmentInformationIntialState,
  isComplete: false,
};

const establishmentInformationsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_ESTABLISHMENT_INFORMATION:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default establishmentInformationsReducer;
