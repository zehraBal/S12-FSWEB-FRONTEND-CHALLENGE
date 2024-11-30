import axios from "axios";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchInitialData = (language = "en") => {
  return (dispatch) => {
    axios
      .get("/data/profileData.json")
      .then((res) => {
        if (res.status === 200) {
          // Fetch specific language data or default to English
          const languageData = res.data[language] || res.data["en"];
          dispatch(changeLanguage(language));
          dispatch(fetchDataSuccess(languageData));
        }
      })
      .catch((err) => {
        dispatch(fetchDataFailure(err.message));
      });
  };
};
