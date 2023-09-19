import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/auth";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: action.data };
    case LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false, error: action.error };
    default:
      return state;
  }
};
