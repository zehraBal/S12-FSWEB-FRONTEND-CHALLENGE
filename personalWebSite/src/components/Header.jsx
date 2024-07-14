import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnglishData, fetchTurkishData } from "../store/actions/actions";
import { languageSelector } from "../store/selectors/selectors";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const dispatch = useDispatch();
  const language = useSelector(languageSelector);
  const [isTr, setIsTr] = useState(language === "tr");
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);

  useEffect(() => {
    if (language === "tr") {
      dispatch(fetchTurkishData());
    } else {
      dispatch(fetchEnglishData());
    }
  }, [language, dispatch]);

  const handleLanguage = () => {
    if (!isTr) {
      dispatch(fetchTurkishData());
    } else {
      dispatch(fetchEnglishData());
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full max-w-[960px] h-[72px] text-[#CBF281] flex justify-between items-center bg-transparent max-sm:flex-col max-sm:items-start">
      <p className="font-bold text-[32px]">zehra</p>
      <div className="w-[400px] flex flex-wrap justify-between max-sm:flex-col items-center max-sm:items-start">
        <div
          className="text-[15px] font-bold text-[#CBF281] cursor-pointer max-sm:mr-0 max-sm:mb-3 max-sm:m-0"
          onClick={handleLanguage}
        >
          {isTr ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </div>
        <div className=" text-[#4731D3] font-bold flex justify-center items-center gap-3 max-sm:m-0">
          <div className="container-switch">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleDarkMode}
                checked={isDarkMode}
              />
              <span className="slider"></span>
            </label>
          </div>
          <span>DARK MODE</span>
        </div>
      </div>
    </div>
  );
}
