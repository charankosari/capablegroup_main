/**
 * Theme utility functions for consistent theme management
 */

export type Theme = "light" | "dark" | "system";

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
  if (typeof window === "undefined") return "system";
  
  const stored = localStorage.getItem("capable-labs-theme") as Theme;
  if (stored && ["light", "dark", "system"].includes(stored)) {
    return stored;
  }
  
  return "system";
}

/**
 * Set theme and apply to document
 */
export function setTheme(theme: Theme): void {
  if (typeof window === "undefined") return;
  
  const root = window.document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove("light", "dark");
  
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme);
  }
  
  // Store in localStorage
  localStorage.setItem("capable-labs-theme", theme);
}

/**
 * Get the effective theme (resolves "system" to actual theme)
 */
export function getEffectiveTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  
  const theme = getTheme();
  
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  
  return theme;
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): Theme {
  const currentTheme = getEffectiveTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
}

/**
 * Initialize theme on page load
 */
export function initializeTheme(): void {
  if (typeof window === "undefined") return;
  
  const theme = getTheme();
  setTheme(theme);
  
  // Listen for system theme changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = () => {
    if (getTheme() === "system") {
      setTheme("system"); // Re-apply system theme
    }
  };
  
  mediaQuery.addEventListener("change", handleChange);
  
  // Return cleanup function
  mediaQuery.removeEventListener("change", handleChange);
}

/**
 * Get theme-aware CSS custom property value
 */
export function getThemeValue(lightValue: string, darkValue: string): string {
  const theme = getEffectiveTheme();
  return theme === "dark" ? darkValue : lightValue;
}

/**
 * Generate theme-aware styles object
 */
export function createThemeStyles(styles: {
  light: Record<string, string>;
  dark: Record<string, string>;
}): Record<string, string> {
  const theme = getEffectiveTheme();
  return theme === "dark" ? styles.dark : styles.light;
}

/**
 * Check if current theme is dark
 */
export function isDarkTheme(): boolean {
  return getEffectiveTheme() === "dark";
}

/**
 * Check if system prefers dark theme
 */
export function systemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}
