import {
  PharmaceuticalEstablishmentActionTypes,
  LookupsActionTypes,
} from "../actionTypes/actions-types";

/// this is global action type for all services ,
/// it would be much easier since each item in it represent a whole service
/// each team can work in a different service .lastly put thier actionstype here
export const ActionTypes = {
  PharmaceuticalEstablishmentActionTypes,
  LookupsActionTypes,
};
export type ActionTypes = typeof ActionTypes;

interface StateNode {
  data?: any;
  isComplete?: boolean;
}

export interface StateSelectorInterface {
  // New License Pharmaceutical Establishment
  pharmaceuticalEstablishment: {
    establishmentInformationsReducer: StateNode;
    contactInformationsReducer: StateNode;
    locationInformationsReducer: StateNode;
    ownerDetailsReducer: StateNode;
    partnerDetailsReducer: StateNode;
    selfEvaluationsReducer: StateNode;
    Add_New_PARTNER: StateNode;
    Remove_New_PARTNER: StateNode;
    stepNumberReducer: number;
  };
  relocationPharmaceutical: {
    locationInformationsReducer: StateNode;
    selfEvaluationsReducer: StateNode;
    stepNumberReducer: number;
  };

  // common lookups like emirates , countries , ...etc it will be in common folder
  lookupsReducer: any;
  attachmentsReducer: any;

  // config like lang , direction ... etc
  configReducer: any;

  /// layout
  footerReducer: any;
  breadCrumbReducer: any;
}
