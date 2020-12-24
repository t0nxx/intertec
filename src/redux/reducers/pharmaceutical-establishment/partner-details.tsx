/* eslint-disable @typescript-eslint/comma-dangle */
import { GenerateUUID } from "../../../utils/createUUid";
import { partnerDetailInitialState } from "../../../components/screens/pharamaceutical-establishment-screen/partner-details/add-partner/add-partner-helper";
import { PharmaceuticalEstablishmentActionTypes } from "../../actionTypes/actions-types";

const initalState = {
  data: [],
  isComplete: false,
};

const partnerDetailsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS:
      // no data here mean he could not have any patner
      return {
        data: state.data,
        isComplete: true,
      };
    case PharmaceuticalEstablishmentActionTypes.Add_New_PARTNER:
      const id = GenerateUUID();
      return {
        data: [{ id, ...payload }, ...state.data],
        isComplete: false,
      };
    case PharmaceuticalEstablishmentActionTypes.EDIT_PARTNER:
      // remove old one  from state
      state.data = state.data.filter((e: any) => e.id !== payload.id);
      return {
        data: [payload, ...state.data],
        isComplete: false,
      };
    case PharmaceuticalEstablishmentActionTypes.Remove_New_PARTNER:
      return {
        data: state.data.filter((e: any) => e.id !== payload),
        isComplete: false,
      };
    default:
      return state;
  }
};

export default partnerDetailsReducer;
