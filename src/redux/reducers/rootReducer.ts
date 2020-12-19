import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import lookupsReducer from "./lookups/lookups";
import footerReducer from "../reducers/layout/footerReducer";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  lookupsReducer,
  footerReducer,
});

export default rootReducer;
