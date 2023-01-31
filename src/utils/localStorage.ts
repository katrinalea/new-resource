import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: unknown) {
  // getting stored value
  const saved = localStorage.getItem(key);
  if (typeof saved === "string") {
    const initial = JSON.parse(saved);
    return initial;
  }
  return defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
