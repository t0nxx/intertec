/* eslint-disable @typescript-eslint/comma-dangle */

// import { selfEvaluationInitialState } from "../../../components/screens/pharamaceutical-establishment/partner-detail/partner-detail-helper";
import { PharmaceuticalEstablishmentActionTypes } from "./actions-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initalState = {
  data: {},
  isComplete: false,
};

const selfEvaluationsReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.SET_SELF_EVALUATION:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default selfEvaluationsReducer;
