import { SelfEvaluationActionTypes } from "../actionTypes/actions-types";

export const fetchSelfEvaluationActionRequest = () => {
  return {
    type: SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_REQUESTED,
  };
};
export const fetchSelfEvaluationActionSuccess = (data) => {
  return {
    type: SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_SUCCESS,
    payload: data,
  };
};
export const fetchSelfEvaluationActionFailure = (data) => {
  return {
    type: SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_FAILURE,
    payload: data,
  };
};
