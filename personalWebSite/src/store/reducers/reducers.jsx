import { CHANGE_LANGUAGE_EN, CHANGE_LANGUAGE_TR } from "../actions/actions";
import { profileData } from "../../profileData";
const initialState = {
  language: "en",
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
      return { ...state, data: action.payload };
    case CHANGE_LANGUAGE_EN:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
