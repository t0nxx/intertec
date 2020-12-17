import { combineReducers } from "redux";
import establishmentInformationsReducer from "./establishment-information";
import contactInformationsReducer from "./contact-information";
import locationInformationsReducer from "./location-information";
import ownerDetailsReducer from "./owner-details";
import stepNumberReducer from "./step-number";
import partnerDetailsReducer from "./partner-details";
import selfEvaluationsReducer from "./self-evaluation";
import progressBarPersentageReducer from "./progress-bar";

export default combineReducers({
  establishmentInformationsReducer,
  contactInformationsReducer,
  locationInformationsReducer,
  ownerDetailsReducer,
  partnerDetailsReducer,
  selfEvaluationsReducer,
  stepNumberReducer,
  progressBarPersentageReducer,
});
