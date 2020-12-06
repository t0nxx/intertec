import { combineReducers } from "redux";
import establishmentInformationsReducer from "./establishment-information";
import contactInformationsReducer from "./contact-information";
import locationInformationsReducer from "./location-information";
import ownerDetailsReducer from "./owner-details";

export default combineReducers({
  establishmentInformationsReducer,
  contactInformationsReducer,
  locationInformationsReducer,
  ownerDetailsReducer,
});