/* eslint-disable @typescript-eslint/comma-dangle */
import { partnerDetailInitialState } from "../../../components/screens/pharamaceutical-establishment/partner-details/add-partner/add-partner-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

const initalState = {
  data: [partnerDetailInitialState],
  isComplete: false,
};

const partnerDetailsReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default partnerDetailsReducer;
