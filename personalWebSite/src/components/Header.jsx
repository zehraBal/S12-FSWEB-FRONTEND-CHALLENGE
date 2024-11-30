import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData } from "../store/actions/actions";
import { languageSelector } from "../store/selectors/selectors";
import { useDarkMode } from "../hooks/useDarkMode";
import { useLanguage } from "../hooks/useLanguage";

export default function Header() {
  const dispatch = useDispatch();
  const reduxLanguage = useSelector(languageSelector);
  const [currentLanguage, setLanguage] = useLanguage(reduxLanguage);
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);

  useEffect(() => {
    // Fetch data based on current language
    dispatch(fetchInitialData(currentLanguage));
  }, [currentLanguage, dispatch]);

  const handleLanguage = () => {
    const newLanguage = currentLanguage === "tr" ? "en" : "tr";
    setLanguage(newLanguage);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="text-[#4731D3] flex justify-center items-center bg-[#F4F4F4] max-sm:flex-col max-sm:items-start py-5 dark:bg-[#1A1A1A]">
      <div className="basis-3/4 flex justify-between items-center">
        <p className="font-bold text-[32px]">zehra</p>
        <div className="w-[400px] flex flex-wrap justify-between max-sm:flex-col items-center max-sm:items-start">
          <div
            className="text-[15px] font-bold  cursor-pointer max-sm:mr-0 max-sm:mb-3 max-sm:m-0"
            onClick={handleLanguage}
          >
            {currentLanguage === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
          </div>
          <div className="text-[#4731D3] font-bold flex justify-center items-center gap-3 max-sm:m-0 max-sm:text-[#CBF281] ">
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
    </header>
  );
}
