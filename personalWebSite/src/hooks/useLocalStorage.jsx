import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    if (storedData) {
      return storedData;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const changeData = (newData) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };
  return [data, changeData];
};
