import axios from "axios";

export const CHANGE_LANGUAGE_TR = "CHANGE_LANGUAGE_TR";
export const CHANGE_LANGUAGE_EN = "CHANGE_LANGUAGE_EN";

export const changeLanguageTr = (dataTr) => {
  return { type: CHANGE_LANGUAGE_TR, payload: dataTr };
};
export const changeLanguageEn = (dataEn) => {
  return { type: CHANGE_LANGUAGE_TR, payload: dataEn };
};

export const fetchTurkishData = () => (dispatch) => {
  axios
    .get("/data/profileData.json")
    .then((res) => {
      if (res.status === 200) {
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
        dispatch(changeLanguageEn(res.data.en));
      }
    })
    .catch((err) => console.warn(err));
};
