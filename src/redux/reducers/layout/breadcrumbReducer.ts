import { LayoutActionTypes } from "./actions-types";

const initialState = {
  title: "Home",
};

const breadCrumbReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case LayoutActionTypes.SET_BREADCRUMB_TITLE:
      return { title: payload };

    default:
      return state;
  }
};
export default breadCrumbReducer;
