/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PharmaceuticalEstablishmentActionTypes } from "./pharmaceutical-establishment/actions-types";

export const ActionTypes = {
  PharmaceuticalEstablishmentActionTypes,
};
export type ActionTypes = typeof ActionTypes;

interface StateNode {
  data?: any;
  isComplete?: boolean;
}

export interface StateSelectorInterface {
  pharmaceuticalEstablishment: {
    establishmentInformationsReducer: StateNode;
    contactInformationsReducer: StateNode;
    locationInformationsReducer: StateNode;
    ownerDetailsReducer: StateNode;
    partnerDetailsReducer: StateNode;
    selfEvaluationsReducer: StateNode;
    stepNumberReducer: number;
    progressBarPersentageReducer: number;
  };
}
