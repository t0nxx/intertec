import * as types from "../actionTypes";

export const directionAction = (payload, history) => ({
  type: types.CONFIG_DIRECTION,
  payload,
  history,
});

export const progressAction = (payload, history) => ({
  type: types.PROGRESS_ACTION,
  payload,
  history,
  // sorry for missing with your code but it gives us error cant run project , hope you fix it
  // actionTypes,
});

export const commonAction = (payload, history) => ({
  type: types.COMMON_CONFIG,
  payload,
  history,
});
export const showExternalFooterAction = (payload, history) => ({
  type: types.SHOW_EXTERNAL_FOOTER,
  payload,
  history,
});

/**
 * This will show custom subheader for ChangeNamePharmaEstd
 * @param isHeaderView
 * @returns {{payload: {isHeaderView: *}, type: string}}
 */
export const showCustomHeader = (isHeaderView) => ({
  type: types.CHANGE_CUSTOM_SUB_HEADER,
  payload: { isHeaderView },
});

/**
 * This will set sub header title of ChangeNamePharmaEstd
 * @param headerTitle
 * @returns {{payload: {headerTitle: *}, type: string}}
 */
export const setCustomSubHeaderTitle = (headerTitle) => ({
  type: types.SET_SUB_HEADER_TITLE,
  payload: { headerTitle },
});

/**
 * This will dispatch action for seting service name in custom header
 * @param serviceName
 * @returns {{payload: {serviceName: *}, type: string}}
 */
export const setServiceNameInCustomSubHeader = (serviceName) => ({
  type: types.SET_SERVICE_NAME,
  payload: { serviceName },
});
