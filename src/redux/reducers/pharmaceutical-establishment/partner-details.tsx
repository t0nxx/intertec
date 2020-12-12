/* eslint-disable @typescript-eslint/comma-dangle */
import { partnerDetailInitialState } from "../../../components/pages/pharamaceutical-establishment-screen/partner-details/add-partner/add-partner-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

const initalState = {
  data: [],
  isComplete: false,
};

const partnerDetailsReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS:
      // no data here mean he could not have any patner
      return {
        data: state.data,
        isComplete: true,
      };
    case PharmaceuticalEstablishmentActionTypes.Add_New_PARTNER:
      return {
        data: [payload, ...state.data],
        isComplete: true,
      };
    case PharmaceuticalEstablishmentActionTypes.Remove_New_PARTNER:
      return {
        data: state.data.filter((e: any) => e.passportNo !== payload),
        isComplete: true,
      };
    default:
      return state;
  }
};

export default partnerDetailsReducer;
