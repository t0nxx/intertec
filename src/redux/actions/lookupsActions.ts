import { LookupsActionTypes } from "../actionTypes/actions-types";

export const fetchLookUpsActionRequest = () => {
  return {
    type: LookupsActionTypes.FETCH_LOOKUPS_REQUESTED,
  };
};
export const fetchLookUpsActionSuccess = (data) => {
  return {
    type: LookupsActionTypes.FETCH_LOOKUPS_SUCCESS,
    payload: data,
  };
};
export const fetchLookUpsActionFailure = (data) => {
  return {
    type: LookupsActionTypes.FETCH_LOOKUPS_FAILURE,
    payload: data,
  };
};
