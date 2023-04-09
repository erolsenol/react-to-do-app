import React, { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      Active Theme: {theme}
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default React.memo(Header);
