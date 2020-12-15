import { LookupsActionTypes } from "./actions-types";

const initalState = {
  data: {
    EstablishmentClassifications: [],
    EstablishmentType: [],
    Title: [],
    Emirates: [],
    EstablishmentCategory: [],
    MedicalEstablishmentSpecialty: [],
    Countries: [],
    Genders: [],
    "Self-Evaluation": [],
    AttachmentType: [],
    AttachmentCategory: [],
  },
  isLoading: false,
  error: null,
};

const lookupsReducer = (state = initalState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case LookupsActionTypes.FETCH_LOOKUPS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case LookupsActionTypes.FETCH_LOOKUPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case LookupsActionTypes.FETCH_LOOKUPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default lookupsReducer;
