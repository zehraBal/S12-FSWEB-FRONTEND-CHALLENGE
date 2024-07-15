import axios from "axios";

export const CHANGE_LANGUAGE_TR = "CHANGE_LANGUAGE_TR";
export const CHANGE_LANGUAGE_EN = "CHANGE_LANGUAGE_EN";
//export const FETCH_INITIAL_DATA = "FETCH_INITIAL_DATA";

export const changeLanguageTr = (dataTr) => {
  return { type: CHANGE_LANGUAGE_TR, payload: dataTr };
};

export const changeLanguageEn = (dataEn) => {
  return { type: CHANGE_LANGUAGE_EN, payload: dataEn };
};

/*export const getInitialData = (data) => {
  return { type: FETCH_INITIAL_DATA, payload: data };
};*/

export const fetchTurkishData = () => (dispatch) => {
  axios
    .get("/data/profileData.json")
    .then((res) => {
      if (res.status === 200) {
        console.log("Fetched Turkish data:", res.data.tr);
        dispatch(changeLanguageTr(res.data.tr));
      }
    })
    .catch((err) => console.warn(err));
};

export const fetchEnglishData = () => (dispatch) => {
  axios
    .get("/data/profileData.json")
    .then((res) => {
      if (res.status === 200) {
        console.log("Fetched English data:", res.data.en);
        dispatch(changeLanguageEn(res.data.en));
      }
    })
    .catch((err) => console.warn(err));
};

/*export const fetchInitialData = () => (dispatch) => {
  axios
    .get("/data/profileData.json")
    .then((res) => {
      if (res.status === 200) {
        console.log("Fetched initial data:", res.data.en);
        dispatch(getInitialData(res.data.en));
      }
    })
    .catch((err) => console.warn(err)); 
}; */
