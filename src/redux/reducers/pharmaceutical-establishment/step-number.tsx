/* eslint-disable @typescript-eslint/comma-dangle */

import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = -1;

const stepNumberReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER:
      // 0 check the collapse is closed when screen entered , 6 for maximum number of steps
      if (state < 0 || state < 6) {
        return parseInt((state + 1).toString(), 10);
      }
      return state;
    case PharmaceuticalEstablishmentActionTypes.SET_STEP_NUMBER:
      return payload;
    default:
      return state;
  }
};

export default stepNumberReducer;
