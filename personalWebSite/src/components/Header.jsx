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
    <div className="w-[960px] h-[72px] text-[#CBF281] flex justify-between items-center bg-transparent">
      <p className="font-bold text-[32px]">zehra</p>
      <div className="flex  flex-wrap ">
        <div
          className=" mr-9 text-[15px] font-bold  text-[#CBF281] cursor-pointer"
          onClick={handleLanguage}
        >
          {isTr ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </div>
        <div className=" ml-9  text-[#4731D3] font-bold flex justify-center items-center gap-3">
          <div className="flex items-center">
            <label className="relative inline-block w-[55px] h-[24px]">
              <input
                type="checkbox"
                onChange={toggleDarkMode}
                className="opacity-0 w-0 h-0"
              />
              <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#8f88ff] rounded-[34px] transition-all duration-400 before:absolute before:content-[''] before:w-[15px] before:h-[16px] before:left-[5px] before:bottom-[4px] before:bg-[#ffe86e] before:rounded-[50%] before:transition-transform before:duration-400 dark:before:translate-x-[30px] dark:before:bg-[#ffe86e] dark:bg-[#252128]"></span>
            </label>
          </div>
          <span>DARK MODE</span>
        </div>
      </div>
    </div>
  );
}
