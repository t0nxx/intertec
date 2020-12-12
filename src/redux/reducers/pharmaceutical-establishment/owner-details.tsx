/* eslint-disable @typescript-eslint/comma-dangle */

import { ownerDetailInitialState } from "../../../components/pages/pharamaceutical-establishment-screen/owner-detail/owner-detail-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = {
  data: ownerDetailInitialState,
  isComplete: false,
};

const ownerDetailsReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_OWNER_DETAILS:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default ownerDetailsReducer;
