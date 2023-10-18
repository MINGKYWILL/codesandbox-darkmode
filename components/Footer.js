import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);

  function handleDark() {
    setIsDark((prev) => !prev);
  }

  return (
    <div
      className="footer"
      style={{ backgroundColor: isDark ? "black" : "white" }}
    >
      <button onClick={() => handleDark()} className="button">
        {isDark ? "🌝" : "🌚"}
      </button>
    </div>
  );
}
