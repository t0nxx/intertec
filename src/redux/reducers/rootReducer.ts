import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import lookupsReducer from "./lookups/lookupsReducer";
import footerReducer from "../reducers/layout/footerReducer";
import breadCrumbReducer from "./layout/breadcrumbReducer";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  lookupsReducer,
  footerReducer,
  breadCrumbReducer,
});

export default rootReducer;
