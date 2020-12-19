import { LayoutActionTypes } from "../../actionTypes/actions-types";

const initialState = {
  showFooter: true,
  showBackButton: false,
  showStickyInfo: false,
  stickyInfoDescription: "",
  stickyInfoFees: "",
  customFooterContent: "",
};

const footerReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case LayoutActionTypes.SHOW_BACK_BUTTON:
      return { ...state, showBackButton: true };

    case LayoutActionTypes.HIDE_BACK_BUTTON:
      return { ...state, showBackButton: false };

    case LayoutActionTypes.SHOW_INFO:
      return { ...state, showStickyInfo: true };

    case LayoutActionTypes.HIDE_INFO:
      return { ...state, showStickyInfo: false };

    case LayoutActionTypes.SHOW_FOOTER:
      return { ...state, showFooter: true };

    case LayoutActionTypes.HIDE_FOOTER:
      return { ...state, showFooter: false };

    case LayoutActionTypes.SET_INFO_DESCRIPTION:
      return { ...state, stickyInfoDescription: payload };

    case LayoutActionTypes.SET_INFO_FEES:
      return { ...state, stickyInfoFees: payload };

    case LayoutActionTypes.SET_FOOTER_CONTENT: {
      return { ...state, customFooterContent: payload };
    }
    case LayoutActionTypes.HIDE_FOOTER_WITH_INFO_AND_BACK_BUTTON: {
      return {
        ...state,
        showFooter: false,
        showBackButton: false,
        showStickyInfo: false,
      };
    }
    default:
      return state;
  }
};
export default footerReducer;
