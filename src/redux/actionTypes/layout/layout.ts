import { LayoutActionTypes } from "../../reducers/layout/actions-types";

// export enum LayoutActionTypes {
//   SET_FOOTER_CONTENT = "SET_FOOTER_CONTENT",
//   SET_INFO_DESCRIPTION = "SET_INFO_DESCRIPTION",
//   SET_INFO_FEES = "SET_INFO_FEES",
//   SHOW_BACK_BUTTON = "SHOW_BACK_BUTTON",
//   HIDE_BACK_BUTTON = "HIDE_BACK_BUTTON",
//   SHOW_INFO = "SHOW_INFO",
//   HIDE_INFO = "HIDE_INFO",
//   SHOW_FOOTER = "SHOW_FOOTER",
//   HIDE_FOOTER = "HIDE_FOOTER",
//   HIDE_FOOTER_WITH_INFO_AND_BACK_BUTTON = "HIDE_FOOTER_WITH_INFO_AND_BACK_BUTTON",
// }

export const showBackButtonAction = () => {
  return {
    type: LayoutActionTypes.SHOW_BACK_BUTTON,
  };
};
export const hideBackButtonAction = () => {
  return {
    type: LayoutActionTypes.HIDE_BACK_BUTTON,
  };
};
export const showInfoAction = () => {
  return {
    type: LayoutActionTypes.SHOW_INFO,
  };
};
export const hideInfoAction = () => {
  return {
    type: LayoutActionTypes.HIDE_INFO,
  };
};
export const setInfoDescriptionAction = (payload) => {
  return {
    type: LayoutActionTypes.SET_INFO_DESCRIPTION,
    payload,
  };
};
export const setInfoFeesAction = (payload) => {
  return {
    type: LayoutActionTypes.SET_INFO_FEES,
    payload,
  };
};
export const showFooterAction = () => {
  return {
    type: LayoutActionTypes.SHOW_FOOTER,
  };
};
export const hideFooterAction = () => {
  return {
    type: LayoutActionTypes.HIDE_FOOTER,
  };
};
export const setFooterContentAction = (payload) => {
  return {
    type: LayoutActionTypes.SET_FOOTER_CONTENT,
    payload,
  };
};
