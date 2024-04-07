"use client";
import { useEffect, useState } from "react";

export function useAppTheme() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
  const key = "theme";
  const [value, setValue] = useState(localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);
  return value;
}
