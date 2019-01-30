import regeneratorRuntime from "regenerator-runtime";
import {
  put,
  takeEvery,
  all,
  call,
  fork,
  takeLatest
} from "redux-saga/effects";

function* shelfChange(action) {}

// ROOT SAGA

export const LibrarySagas = [takeEvery("CHANGE_SHELF", shelfChange)];
