import {
  GET_THEME_REQUEST,
  GET_THEME_SUCCESS,
  GET_THEME_FAILURE,
} from "./getThemeType";
const getThemeRequest = (loading: boolean) => {
  return {
    type: GET_THEME_REQUEST,
    loading: loading,
  };
};
const getThemeSuccess = (state: any, loading: boolean) => {
  return {
    type: GET_THEME_SUCCESS,
    payload: state,
    loading: loading,
  };
};
const getThemeFailure = (error: unknown, loading: boolean) => {
  return {
    type: GET_THEME_FAILURE,
    payload: error,
    loading: loading,
  };
};
const getThemeResponse: any = (state: any) => {
  let loading: boolean = true;
  return function (dispatch: any) {
    try {
      dispatch(getThemeRequest(loading));
      loading = false;
      dispatch(getThemeSuccess(state, loading));
    } catch (error) {
      loading = false;
      dispatch(getThemeFailure(error, loading));
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getThemeRequest,
  getThemeSuccess,
  getThemeFailure,
  getThemeResponse,
};
