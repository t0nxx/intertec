import { combineReducers } from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import relocationPharmaceutical from "./relocation-pharmaceutical";
import lookupsReducer from "./lookups/lookupsReducer";
import footerReducer from "../reducers/layout/footerReducer";
import breadCrumbReducer from "./layout/breadcrumbReducer";
import attachmentsReducer from "./attachments/attachmentsReducer";

/// here we will reuse config reducer from amnex
import configReducer from "./configReducer";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  relocationPharmaceutical,
  lookupsReducer,
  attachmentsReducer,
  footerReducer,
  breadCrumbReducer,
  //////// from amnex code
  configReducer,
});

export default rootReducer;
