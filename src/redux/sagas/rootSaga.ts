import { all } from "redux-saga/effects";
import attachmentsDataSagaWatcher from "./attachments/attachmentsDataSaga";
import lookupsDataSagaWatcher from "./lookups/lookupsDataSaga";

export function* rootSaga() {
  yield all([lookupsDataSagaWatcher(), attachmentsDataSagaWatcher()]);
}
