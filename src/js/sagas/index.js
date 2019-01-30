import regeneratorRuntime from "regenerator-runtime";
import { all } from "redux-saga/effects";
import { LibrarySagas } from "./Library";

export default function* Sagas() {
  yield all([...LibrarySagas]);
}
