import { CHANGE_LANGUAGE_EN, CHANGE_LANGUAGE_TR } from "../actions/actions";
import { profileData } from "../../profileData";
const initialState = {
  language: localStorage.getItem("language") || "en",
  data: profileData,
};
console.log("initialState=", initialState);
function initialLanguage(key) {
  return JSON.parse(localStorage, key);
}
function initialMode(key) {
  return JSON.parse(localStorage, key);
}
export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE_TR:
      localStorage.setItem("language", "tr");
      return { ...state, data: action.payload, language: "tr" };
    case CHANGE_LANGUAGE_EN:
      localStorage.setItem("language", "en");
      return { ...state, data: action.payload, language: "en" };
    default:
      return state;
  }
};
