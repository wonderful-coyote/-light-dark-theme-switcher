import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={() => toggleTheme()} // Pass the toggleTheme function as the event handler
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
