import { combineReducers } from "redux";
import locationInformationsReducer from "./location-information";
import stepNumberReducer from "./step-number";
import selfEvaluationsReducer from "./self-evaluation";

export default combineReducers({
  locationInformationsReducer,
  selfEvaluationsReducer,
  stepNumberReducer,
});
