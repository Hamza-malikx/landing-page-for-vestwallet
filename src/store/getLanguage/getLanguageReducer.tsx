import {
  GET_LANGUAGE_REQUEST,
  GET_LANGUAGE_SUCCESS,
  GET_LANGUAGE_FAILURE,
} from "./getLanguageType";
const initialState = {
  loading: false,
  lang: true,
  error: "",
};
const themeState = () => {
  const auth = localStorage.getItem("investium-Lang");
  try {
    if (auth === null) {
      return initialState;
    } else {
      const authObj = JSON.parse(auth);

      return authObj;
    }
  } catch (error) {
    return initialState;
  }
};
const newThemeState = themeState();
const getThemeReducer = (state = newThemeState, action: any) => {
  switch (action.type) {
    case GET_LANGUAGE_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: "",
      };
    case GET_LANGUAGE_SUCCESS:
      const setThemeState = {
        ...state,
        lang: action.payload,
        loading: action.loading,
        error: "",
      };
      localStorage.setItem("investium-Lang", JSON.stringify(setThemeState));
      return setThemeState;
    case GET_LANGUAGE_FAILURE:
      return {
        lang: [],
        loading: action.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getThemeReducer;
