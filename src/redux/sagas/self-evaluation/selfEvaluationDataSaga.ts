import { put, call, takeEvery, select } from "redux-saga/effects";
import { selfEvaluationEvaDataEndpoint } from "../../../api/services/selfEvaluationDataApi";
import {
  fetchSelfEvaluationActionFailure,
  fetchSelfEvaluationActionSuccess,
} from "../../actions/selfEvaluationActions";
import { SelfEvaluationActionTypes } from "../../actionTypes/actions-types";

function* selfEvaluationDataSaga() {
  try {
    // get lookups dynamically when set service code
    const currentServiceCode = yield select((s) => s.configReducer.serviceCode);
    const response = yield call(
      selfEvaluationEvaDataEndpoint,
      currentServiceCode
    );

    // casue the backend send 200 in all times even error , we will check the error from responce itself
    if (response.code === 200) {
      // mean thier is no error
      yield put(fetchSelfEvaluationActionSuccess(response));
    } else {
      yield put(fetchSelfEvaluationActionFailure(response));
    }
  } catch (error) {
    yield put(fetchSelfEvaluationActionFailure(error));
  }
}

function* selfEvaluationDataSagaWatcher() {
  yield takeEvery(
    SelfEvaluationActionTypes.FETCH_SELF_EVALUATION_REQUESTED,
    selfEvaluationDataSaga
  );
}

export default selfEvaluationDataSagaWatcher;
