import { combineReducers } from "redux";
import getThemeReducer from "./getTheme/getThemeReducer";
import getLanguageReducer from "./getLanguage/getLanguageReducer";
const rootReducer = combineReducers({
  getThemeReducer,
  getLanguageReducer,
});
export default rootReducer;
