import { RelocationPharmaceuticaActionTypes } from "../actionTypes/actions-types";

export const setRelocationPharmaceuticalInformationAction = (data) => {
  return {
    type: RelocationPharmaceuticaActionTypes.SET_LOACTION_INFORMATION,
    payload: data,
  };
};

export const setSelfEvaluationAction = (data) => {
  return {
    type: RelocationPharmaceuticaActionTypes.SET_SELF_EVALUATION,
    payload: data,
  };
};

export const relocationPharmaceuticalNextStepAction = () => {
  return {
    type: RelocationPharmaceuticaActionTypes.NEXT_STEP_NUMBER,
  };
};
