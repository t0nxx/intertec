import { PharmaceuticalEstablishmentActionTypes } from "../actionTypes/actions-types";

export const setEstablishmentInformationAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_ESTABLISHMENT_INFORMATION,
    payload: data,
  };
};

export const setContactInformationAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_CONTACT_INFORMATION,
    payload: data,
  };
};

export const setLocationInformationAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_LOACTION_INFORMATION,
    payload: data,
  };
};

export const setOwnerDetailsAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_OWNER_DETAILS,
    payload: data,
  };
};

export const setPartnerDetailsAction = () => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_PARTNER_DETAILS,
  };
};

export const addPartnerAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.Add_New_PARTNER,
    payload: data,
  };
};
export const editPartnerAction = (id, data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.EDIT_PARTNER,
    payload: { id, ...data },
  };
};
export const removePartnerAction = (index) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.Remove_New_PARTNER,
    payload: index,
  };
};
export const setSelfEvaluationAction = (data) => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.SET_SELF_EVALUATION,
    payload: data,
  };
};

export const pharmaceuticalEstablishmentNextStepAction = () => {
  return {
    type: PharmaceuticalEstablishmentActionTypes.NEXT_STEP_NUMBER,
  };
};
