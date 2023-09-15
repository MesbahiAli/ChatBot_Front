import * as ActionsTypes from "../../../common/state/StatesConstants";

export const AUTH_START = (request) => ({
  type: ActionsTypes.AUTH_START,
  request,
});

export const AUTH_SUCCESS = (response) => ({
  type: ActionsTypes.AUTH_SUCCESS,
  response,
});

export const AUTH_FAIL = (error) => ({
  type: ActionsTypes.AUTH_FAIL,
  error,
});
