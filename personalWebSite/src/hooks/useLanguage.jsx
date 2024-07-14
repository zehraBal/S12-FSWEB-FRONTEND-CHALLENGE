import { useLocalStorage } from "./useLocalStorage";

export const useLanguage = (initialValue) => {
  const [language, setLanguage] = useLocalStorage("language", initialValue);
  return [language, setLanguage];
};
