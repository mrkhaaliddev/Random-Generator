"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  // ** state
  const [theme, setLocalTheme] = React.useState<string>("light");

  const { setTheme } = useTheme();

  React.useEffect(() => {
    const storedTheme: any = localStorage.getItem("theme") || "light";
    setLocalTheme(storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme: any = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setLocalTheme(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex w-full justify-end">
      <div className="fixed top-1/2 -translate-y-1/2">
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
