/* eslint-disable @typescript-eslint/comma-dangle */

import { PharmaceuticalEstablishmentActionTypes } from "../../actionTypes/actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = 8;

const progressBarPersentageReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_PROGRESS_PERSENTAGE:
      return state + payload > 90 ? 90 : state + payload;
    default:
      return state;
  }
};

export default progressBarPersentageReducer;
