"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { Button } from "../components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [current, setCurrent] = useState("system");

  // Synchroniser avec le thème actuel
  useEffect(() => {
    if (theme) setCurrent(theme);
  }, [theme]);

  // Fonction pour basculer entre system → dark → light
  const handleToggle = () => {
    let nextTheme = "system";
    if (current === "system") nextTheme = "dark";
    else if (current === "dark") nextTheme = "light";
    else nextTheme = "system";

    setTheme(nextTheme);
    setCurrent(nextTheme);
  };

  // Déterminer quelle icône afficher
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Laptop;

  return (
    <Button variant="outline" size="icon" onClick={handleToggle}>
      <Icon className=" text-gray-700 h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
