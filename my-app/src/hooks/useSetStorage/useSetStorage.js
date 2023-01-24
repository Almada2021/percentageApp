import { useState } from "react";
export function useSetStorage(key = "") {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(key))
      ? JSON.parse(localStorage.getItem(key))
      : ""
  );
  const setDataStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(JSON.parse(localStorage.getItem(key)));
  };
  return [data, setDataStorage, setData];
}
