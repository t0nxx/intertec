import {combineReducers} from "redux";
import pharmaceuticalEstablishment from "./pharmaceutical-establishment";
import configReducer from "./configReducer";
import footerReducer from "./footerReducer";

const rootReducer = combineReducers({
  pharmaceuticalEstablishment,
  configReducer,
  footerReducer,
});

export default rootReducer;
