import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Content() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black"
      }}
    >
      <p>
        useContext is a React Hook that lets you read and subscribe to context
        from your component.
      </p>
    </div>
  );
}
