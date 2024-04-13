

import React, { useState, useEffect } from "react";
import lightpng from "../assets/website/pngwing.com (1).png";
import darkpng from "../assets/website/pngwing.com.png";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    // Update the dark mode state in local storage
    localStorage.setItem("darkMode", isDarkMode);
    // Add or remove 'night-mode' class based on the state
    if (isDarkMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="relative">
      <img
        src={isDarkMode ? darkpng : lightpng}
        alt=""
        className="w-12 cursor-pointer drop-shadow[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        onClick={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;


