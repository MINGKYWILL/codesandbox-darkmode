import React, { useState } from "react";
import "./styles.css";
import Page from "../components/Page";
import { ThemeContext } from "../context/ThemeContext";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
