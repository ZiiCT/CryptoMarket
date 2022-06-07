import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-2 " aria-label="Dark mode toggle">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <BsSun className="text-primary text-2xl mr-2"></BsSun> Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <BsMoon className="text-primary text-2xl mr-2"></BsMoon>
          Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
