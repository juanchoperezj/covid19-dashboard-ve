import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme";

const useDarkMode = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme(lightTheme);
      window.localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme === "dark" ? darkTheme : lightTheme);
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
