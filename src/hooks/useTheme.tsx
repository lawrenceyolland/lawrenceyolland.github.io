import { useEffect, useState } from "react";
type Theme = "light" | "dark";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");

      if (value === "light" || value === "dark") {
        return value;
      }

      const queryResult = window.matchMedia("(prefers-color-scheme: dark)");
      return queryResult.matches ? "dark" : "light";
    }

    return "light";
  });

  useEffect(() => {
    if (!theme) {
      return;
    }

    const el = document.documentElement;
    el.classList.remove("light", "dark");
    el.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    return setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
