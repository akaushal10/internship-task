import { all } from "@redux-saga/core/effects";
import loginWatcher from "./loginSaga";
export default function* rootSaga() {
  yield all([loginWatcher()]);
}
