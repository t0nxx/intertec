import { AttachmentsActionTypes } from "../actionTypes/actions-types";

export const fetchAttachmentsActionRequest = () => {
  return {
    type: AttachmentsActionTypes.FETCH_ATTACHMENTS_REQUESTED,
  };
};
export const fetchAttachmentsActionSuccess = (data) => {
  return {
    type: AttachmentsActionTypes.FETCH_ATTACHMENTS_SUCCESS,
    payload: data,
  };
};
export const fetchAttachmentsActionFailure = (data) => {
  return {
    type: AttachmentsActionTypes.FETCH_ATTACHMENTS_FAILURE,
    payload: data,
  };
};
