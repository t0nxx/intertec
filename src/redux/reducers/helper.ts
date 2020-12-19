import { PharmaceuticalEstablishmentActionTypes } from "./pharmaceutical-establishment/actions-types";
import { LookupsActionTypes } from "./lookups/actions-types";

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
    progressBarPersentageReducer: number;
  };

  // common lookups like emirates , countries , ...etc it will be in common folder
  lookupsReducer: StateNode;

  footerReducer: any;
}
