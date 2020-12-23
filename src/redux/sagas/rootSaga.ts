import { all } from "redux-saga/effects";
import attachmentsDataSagaWatcher from "./attachments/attachmentsDataSaga";
import lookupsDataSagaWatcher from "./lookups/lookupsDataSaga";
import selfEvaluationDataSagaWatcher from "./self-evaluation/selfEvaluationDataSaga";

export function* rootSaga() {
  yield all([
    lookupsDataSagaWatcher(),
    attachmentsDataSagaWatcher(),
    selfEvaluationDataSagaWatcher(),
  ]);
}
