"use client";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const DarkMode = ({ className = "" }) => {
  const [mount, setMount] = useState(false);
  const { setTheme, theme, systemTheme } = useTheme();

  useEffect(() => {
    setMount(true);
    console.log(systemTheme, theme);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mount) return;

  return (
    <button className={cn(className, "brightness-75")} onClick={toggleTheme}>
      <FiSun className="hidden dark:block" size={20} />
      <FiMoon className="block dark:hidden" size={20} />
    </button>
  );
};

export default DarkMode;
