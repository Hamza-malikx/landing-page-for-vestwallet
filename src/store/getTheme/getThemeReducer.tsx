import {
  GET_THEME_REQUEST,
  GET_THEME_SUCCESS,
  GET_THEME_FAILURE,
} from "./getThemeType";
const initialState = {
  loading: false,
  theme: false,
  error: "",
};
const themeState = () => {
  const auth = localStorage.getItem("investium-theme");
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
    case GET_THEME_REQUEST:
      return {
        ...state,
        loading: action.loading,
        error: "",
      };
    case GET_THEME_SUCCESS:
      const setThemeState = {
        ...state,
        theme: action.payload,
        loading: action.loading,
        error: "",
      };
      // console.log(setThemeState);
      localStorage.setItem("investium-theme", JSON.stringify(setThemeState));
      return setThemeState;
    case GET_THEME_FAILURE:
      return {
        theme: [],
        loading: action.loading,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default getThemeReducer;
