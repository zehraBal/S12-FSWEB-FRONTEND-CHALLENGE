import { CHANGE_LANGUAGE_EN, CHANGE_LANGUAGE_TR } from "../actions/actions";
import { profileData } from "../../profileData";
const initialState = {
  language: "",
  data: profileData,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE_TR:
      return { ...state, data: action.payload, language: "tr" };
    case CHANGE_LANGUAGE_EN:
      return { ...state, data: action.payload, language: "en" };
    default:
      return state;
  }
};
