'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (mounted) {
      const htmlElement = document.documentElement;
      const newIsDark = !isDark;
      
      if (newIsDark) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
      
      setIsDark(newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-lg bg-muted hover:bg-secondary transition-colors duration-200 dark:bg-secondary dark:hover:bg-muted"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
}
