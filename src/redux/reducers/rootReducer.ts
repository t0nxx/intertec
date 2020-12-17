import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import configReducer from "./configReducer";
import footerReducer from "./footerReducer";
import lookupsReducer from "./lookups/lookups";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  configReducer,
  footerReducer,
  lookupsReducer,
});

export default rootReducer;
