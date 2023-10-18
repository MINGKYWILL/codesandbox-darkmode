import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { isDark } = useContext(ThemeContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black"
      }}
    >
      <h1>useContext</h1>
    </header>
  );
}
