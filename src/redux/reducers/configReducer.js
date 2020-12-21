import * as types from "../actionTypes";

const initialState = {
  direction: "ltr",
  locale: "en",
  progress: 5,
  current_flow: "DEFAULT",
  show_external_footer: true, // Change name view page external footer,
  show_default_header: true,
  show_custom_header: false,
  headerTitle: "",
  serviceName: "",
  /// Very helpfull to get all lookups , attachementtypes .... any thing related to service automatic
  serviceCode: "",
};

export default function (state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case types.CONFIG_DIRECTION:
      return {
        ...state,
        direction: action.payload.direction,
        locale: action.payload.locale,
      };
    case types.PROGRESS_ACTION:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case types.COMMON_CONFIG:
      return {
        ...state,
        current_flow: action.payload.current_flow,
      };
    case types.SHOW_EXTERNAL_FOOTER:
      return {
        ...state,
        show_external_footer: action.payload.show_external_footer,
      };
    case types.CHANGE_CUSTOM_SUB_HEADER: {
      const { isHeaderView = false } = payload;
      return {
        ...state,
        show_default_header: !isHeaderView,
        show_custom_header: isHeaderView,
      };
    }
    case types.SET_SUB_HEADER_TITLE:
      // handling title change
      return {
        ...state,
        headerTitle: payload.headerTitle,
      };
    case types.SET_SERVICE_NAME: {
      return {
        ...state,
        serviceName: payload.serviceName,
      };
    }
    case types.SET_SERVICE_CODE: {
      return {
        ...state,
        serviceCode: payload.serviceCode,
      };
    }
    default:
      return state;
  }
}
