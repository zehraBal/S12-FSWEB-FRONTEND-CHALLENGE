import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key)); //is there stored data in localstorage?
    if (storedData) {
      //if so return that data
      return storedData;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue)); //if not set initialVal. as the value of the key and return initialVal.
      return initialValue;
    }
  });
  const changeData = (newData) => {
    setData(newData); //sets data with newData
    localStorage.setItem(key, JSON.stringify(newData)); //stores it in te localStorage
  };
  return [data, changeData];
};
