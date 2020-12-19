import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import relocationPharmaceutical from "./relocation-pharmaceutical";
import lookupsReducer from "./lookups/lookupsReducer";
import footerReducer from "../reducers/layout/footerReducer";
import breadCrumbReducer from "./layout/breadcrumbReducer";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  relocationPharmaceutical,
  lookupsReducer,
  footerReducer,
  breadCrumbReducer,
});

export default rootReducer;
