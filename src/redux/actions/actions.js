import {
  CHECK_VERIFIED,
  FAILURE_CREATE_PROFILE,
  FAILURE_USER_DATA,
  IS_VERIFIED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REQUEST_CREATE_PROFILE,
  REQUEST_FEEDBACK,
  REQUEST_LOGIN,
  REQUEST_USER_DATA,
  RESET_FEEDBACK,
  SET_FEEDBACK_FAILURE,
  SET_FEEDBACK_SUCCESS,
  SUCCESS_CREATE_PROFILE,
  SUCCESS_USER_DATA,
} from "./actionsTypes";

export const requestUserData = () => {
  return {
    type: REQUEST_USER_DATA,
  };
};
export const successUserData = (data) => {
  return {
    type: SUCCESS_USER_DATA,
    payload: data,
  };
};
export const failureUserData = (err) => {
  return {
    type: FAILURE_USER_DATA,
    payload: err,
  };
};

export const requestLogin = (data) => {
  return {
    type: REQUEST_LOGIN,
    payload: data,
  };
};
export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFailure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
};
export const checkVerified = (data) => {
  return {
    type: CHECK_VERIFIED,
    payload: data,
  };
};
export const isVerified = (data) => {
  return {
    type: IS_VERIFIED,
    payload: data,
  };
};
export const requestCreateProfile = (data) => {
  return {
    type: REQUEST_CREATE_PROFILE,
    payload: data,
  };
};
export const successCreateProfile = (data) => {
  return {
    type: SUCCESS_CREATE_PROFILE,
    payload: data,
  };
};
export const failureCreateProfile = (data) => {
  return {
    type: FAILURE_CREATE_PROFILE,
    payload: data,
  };
};
