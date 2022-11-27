import {
  GET_LANGUAGE_REQUEST,
  GET_LANGUAGE_SUCCESS,
  GET_LANGUAGE_FAILURE,
} from "./getLanguageType";
const getLanguageRequest = (loading: boolean) => {
  return {
    type: GET_LANGUAGE_REQUEST,
    loading: loading,
  };
};
const getLanguageSuccess = (state: any, loading: boolean) => {
  return {
    type: GET_LANGUAGE_SUCCESS,
    payload: state,
    loading: loading,
  };
};
const getLanguageFailure = (error: unknown, loading: boolean) => {
  return {
    type: GET_LANGUAGE_FAILURE,
    payload: error,
    loading: loading,
  };
};
const getLanguageResponse: any = (state: any) => {
  let loading: boolean = true;
  return function (dispatch: any) {
    try {
      dispatch(getLanguageRequest(loading));
      loading = false;
      dispatch(getLanguageSuccess(state, loading));
    } catch (error) {
      loading = false;
      dispatch(getLanguageFailure(error, loading));
    }
  };
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getLanguageRequest,
  getLanguageSuccess,
  getLanguageFailure,
  getLanguageResponse,
};
