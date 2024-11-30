// reducer.js
import {
  CHANGE_LANGUAGE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/actions";

const initialState = {
  language: "en",
  data: {},
  loading: false,
  error: null,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
