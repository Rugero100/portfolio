import { useState, useEffect } from "react";

// Manages dark/light theme with localStorage persistence
export function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    // Default to dark mode as requested
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.body;
    if (isDark) {
      root.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return { isDark, toggleTheme };
}
