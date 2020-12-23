import { SelfEvaluationActionTypes } from "../../actionTypes/actions-types";

const initalState = {
  data: [],
  isLoading: false,
  errors: null,
};

const selfEvaluationReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.Data.SelfEvaluationChecklist,
      };
    case SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };
    default:
      return state;
  }
};

export default selfEvaluationReducer;
