import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import lookupsReducer from "./lookups/lookups";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  lookupsReducer,
});

export default rootReducer;
