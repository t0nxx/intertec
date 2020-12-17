import * as types from "../actionTypes";

const initialState = {
  serviceDetails: [],
  showCustomFooter: false,
  isFirstStep: true,
};

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case types.SET_SERVICE_DESCRIPTION:
      return { ...state, serviceDetails: payload.serviceDetails };
    case types.CHANGE_CUSTOM_FOOTER: {
      return {
        ...state,
        showCustomFooter: payload.showCustomFooter,
      };
    }
    case types.CHANGE_FOOTER_FIRST_STEP: {
      return {
        ...state,
        isFirstStep: payload.isFirstStep,
      };
    }
    default:
      return state;
  }
}
