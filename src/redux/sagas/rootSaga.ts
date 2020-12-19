import { all } from "redux-saga/effects";
import lookupsDataSagaWatcher from "./lookups/lookupsDataSaga";

export function* rootSaga() {
  yield all([lookupsDataSagaWatcher()]);
}
