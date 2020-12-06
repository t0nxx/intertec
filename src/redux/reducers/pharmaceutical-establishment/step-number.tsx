/* eslint-disable @typescript-eslint/comma-dangle */

import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = 0;

const stepNumberReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_STEP_NUMBER:
      if (state < 6) {
        return state + 1;
      }
      return state;
    default:
      return state;
  }
};

export default stepNumberReducer;
