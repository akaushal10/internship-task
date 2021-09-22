import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  failureCreateProfile,
  isVerified,
  loginFailure,
  loginSuccess,
  successCreateProfile,
  successUserData,
} from "../actions/actions";
import {
  CHECK_VERIFIED,
  REQUEST_CREATE_PROFILE,
  REQUEST_LOGIN,
} from "../actions/actionsTypes";
import { checkUser, createProfile, verifyUser } from "../api";

function* loginWorker(action) {
  try {
    const data = yield call(checkUser, action.payload);
    yield put(loginSuccess(data));
  } catch (err) {
    yield put(loginFailure(err.message));
  }
}
function* verifiedWorker(action) {
  try {
    const data = yield call(verifyUser, action.payload);
    yield put(isVerified(data));
  } catch (err) {
    yield put(isVerified(""));
  }
}

function* createProfileWorker(action) {
  try {
    const { userData, resumeData } = yield call(createProfile, action.payload);
    yield all([
      put(successCreateProfile(userData)),
      put(successUserData(resumeData.data)),
    ]);
  } catch (err) {
    yield put(failureCreateProfile(err.message));
  }
}

export default function* loginWatcher() {
  yield takeLatest(REQUEST_LOGIN, loginWorker);
  yield takeLatest(CHECK_VERIFIED, verifiedWorker);
  yield takeLatest(REQUEST_CREATE_PROFILE, createProfileWorker);
}
