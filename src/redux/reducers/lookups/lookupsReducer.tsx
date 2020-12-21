import { LookupsActionTypes } from "../../actionTypes/actions-types";

const initalState = {
  data: {
    // EstablishmentClassifications: [],
    // EstablishmentType: [],
    // Title: [],
    // Emirates: [],
    // EstablishmentCategory: [],
    // MedicalEstablishmentSpecialty: [],
    // Countries: [],
    // Genders: [],
    // "Self-Evaluation": [],
    // AttachmentType: [],
    // AttachmentCategory: [],
  },
  isLoading: false,
  errors: null,
};

const lookupsReducer = (
  state = initalState,
  action: { type: string; payload: any }
) => {
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
        data: payload.Data,
      };
    case LookupsActionTypes.FETCH_LOOKUPS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };
    default:
      return state;
  }
};

export default lookupsReducer;
