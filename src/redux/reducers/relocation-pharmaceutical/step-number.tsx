import { PharmaceuticalEstablishmentActionTypes } from "../../actionTypes/actions-types";

const initalState = -1;

const stepNumberReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER:
      // 0 check the collapse is closed when screen entered , 2 for maximum number of steps
      if (state < 0 || state < 2) {
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
