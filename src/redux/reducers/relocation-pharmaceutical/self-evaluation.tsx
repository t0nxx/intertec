import { RelocationPharmaceuticaActionTypes } from "../../actionTypes/actions-types";

const initalState = {
  data: {},
  isComplete: false,
};

const selfEvaluationsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case RelocationPharmaceuticaActionTypes.SET_SELF_EVALUATION:
      return {
        data: { ...payload },
        isComplete: true,
      };
    default:
      return state;
  }
};

export default selfEvaluationsReducer;
