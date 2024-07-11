import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnglishData, fetchTurkishData } from "../store/actions/actions";
import { languageSelector } from "../store/selectors/selectors";

export default function Header() {
  const dispatch = useDispatch();
  const language = useSelector(languageSelector);
  const [isTr, setIsTr] = useState(language === "tr");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsTr(language === "tr");
  }, [language]);

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

  return (
    <div className="w-full max-w-[960px] h-[72px] text-[#CBF281] flex justify-between items-center bg-transparent max-sm:flex-col max-sm:items-start">
      <p className="font-bold text-[32px]">zehra</p>
      <div className="flex flex-wrap max-sm:flex-col items-center max-sm:items-start">
        <div
          className="mr-9 text-[15px] font-bold text-[#CBF281] cursor-pointer max-sm:mr-0 max-sm:mb-3 max-sm:m-0"
          onClick={handleLanguage}
        >
          {isTr ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </div>
        <div className="ml-9 text-[#4731D3] font-bold flex justify-center items-center gap-3 max-sm:m-0">
          <div className="container-switch">
            <label className="switch">
              <input type="checkbox" onChange={toggleDarkMode} />
              <span className="slider"></span>
            </label>
          </div>
          <span>DARK MODE</span>
        </div>
      </div>
    </div>
  );
}
