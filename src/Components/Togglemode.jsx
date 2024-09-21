// DarkModeToggle.js
import React, { useState } from "react";
import "./Togglemode.css" // Import the CSS styles

const Togglemode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  return (
    <div>
     
      <button 
      className="buton"
      onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Togglemode;
