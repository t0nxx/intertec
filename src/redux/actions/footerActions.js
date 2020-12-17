import * as types from "../constants/actionTypes";

/**
 * This will dispatch service description in footer information
 * @param serviceDetails
 * @returns {{payload: {serviceDetails: *}, type: string}}
 */
export const setServiceDescription = (serviceDetails) => ({
  type: types.SET_SERVICE_DESCRIPTION,
  payload: { serviceDetails },
});

/**
 * This will set custom footer view
 * @param showCustomFooter
 * @returns {{payload: {showCustomFooter: *}, type: string}}
 */
export const setCustomFooterView = (showCustomFooter) => ({
  type: types.CHANGE_CUSTOM_FOOTER,
  payload: { showCustomFooter },
});

/**
 * This will set footer first step
 * @param isFirstStep
 * @returns {{payload: {isFirstStep: *}, type: string}}
 */
export const setFooterFirstStep = (isFirstStep) => ({
  type: types.CHANGE_FOOTER_FIRST_STEP,
  payload: { isFirstStep },
});
