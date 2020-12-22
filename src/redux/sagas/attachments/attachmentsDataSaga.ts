import { put, call, takeEvery, select } from "redux-saga/effects";
import { attachmentsDataEndpoint } from "../../../api/services/attachmentsDataApi";
import {
  fetchAttachmentsActionFailure,
  fetchAttachmentsActionSuccess,
} from "../../actions/attachmentsActions";
import { AttachmentsActionTypes } from "../../actionTypes/actions-types";

function* attachmentsDataSaga() {
  try {
    // get attachments dynamically when set service code
    const currentServiceCode = yield select((s) => s.configReducer.serviceCode);
    const response = yield call(attachmentsDataEndpoint, currentServiceCode);

    // casue the backend send 200 in all times even error , we will check the error from responce itself
    if (response.code === 200) {
      // mean thier is no error
      yield put(fetchAttachmentsActionSuccess(response));
    } else {
      yield put(fetchAttachmentsActionFailure(response));
    }
  } catch (error) {
    yield put(fetchAttachmentsActionFailure(error));
  }
}

function* attachmentsDataSagaWatcher() {
  yield takeEvery(AttachmentsActionTypes.FETCH_ATTACHMENTS_REQUESTED, attachmentsDataSaga);
}

export default attachmentsDataSagaWatcher;
