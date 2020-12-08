/* eslint-disable @typescript-eslint/comma-dangle */

import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = 8;

const progressBarPersentageReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_PROGRESS_PERSENTAGE:
      return state + payload;
    default:
      return state;
  }
};

export default progressBarPersentageReducer;
