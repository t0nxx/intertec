import { AttachmentsActionTypes } from "../../actionTypes/actions-types";
import groupBy from "lodash/groupBy";

const initalState = {
  data: {},
  isLoading: false,
  errors: null,
};

const attachmentsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case AttachmentsActionTypes.FETCH_ATTACHMENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AttachmentsActionTypes.FETCH_ATTACHMENTS_SUCCESS:
      /// add files array in each object , this would be helpfull to put each file in category when uploading
      const attachWithEmptyFilesArray = payload.Data.Table.map((e) => {
        return { ...e, isComplete: false, files: [] };
      });
      /// shape required attachment to key : {object} , it would be easy then to pass that object to attachement component
      const formatedAttachShape = groupBy(
        attachWithEmptyFilesArray,
        (att) => att.AttachmentCategory
      );

      return {
        ...state,
        isLoading: false,
        data: formatedAttachShape,
      };
    case AttachmentsActionTypes.FETCH_ATTACHMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };
    default:
      return state;
  }
};

export default attachmentsReducer;
