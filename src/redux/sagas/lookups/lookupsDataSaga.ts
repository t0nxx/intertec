import { put, call, takeEvery } from "redux-saga/effects";
import { lookupsDataEndpoint } from "../../../api/services/lookupsDataApi";
import {
  fetchLookUpsActionFailure,
  fetchLookUpsActionSuccess,
} from "../../actions/lookupsActions";
import { LookupsActionTypes } from "../../actionTypes/actions-types";

function* lookupsDataSaga() {
  try {
    const response = yield call(lookupsDataEndpoint);

    // casue the backend send 200 in all times even error , we will check the error from responce itself
    if (response.code === 200) {
      // mean thier is no error
      yield put(fetchLookUpsActionSuccess(response));
    } else {
      yield put(fetchLookUpsActionFailure(response));
    }
  } catch (error) {
    yield put(fetchLookUpsActionFailure(error));
  }
}

function* lookupsDataSagaWatcher() {
  yield takeEvery(LookupsActionTypes.FETCH_LOOKUPS_REQUESTED, lookupsDataSaga);
}

export default lookupsDataSagaWatcher;
