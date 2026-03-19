/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (mapped to CSS variables — vars store L C H channels only)
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        // Brand palette
        spice: {
          DEFAULT: "oklch(var(--spice) / <alpha-value>)",
          light: "oklch(var(--spice-light) / <alpha-value>)",
          dark: "oklch(var(--spice-dark) / <alpha-value>)",
          foreground: "oklch(var(--spice-foreground) / <alpha-value>)",
        },
        saffron: {
          DEFAULT: "oklch(var(--saffron) / <alpha-value>)",
          light: "oklch(var(--saffron-light) / <alpha-value>)",
          dark: "oklch(var(--saffron-dark) / <alpha-value>)",
          foreground: "oklch(var(--saffron-foreground) / <alpha-value>)",
        },
        cream: {
          DEFAULT: "oklch(var(--cream) / <alpha-value>)",
          dark: "oklch(var(--cream-dark) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "oklch(var(--ink) / <alpha-value>)",
          light: "oklch(var(--ink-light) / <alpha-value>)",
          muted: "oklch(var(--ink-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        warm: "0 4px 24px oklch(var(--spice) / 0.15)",
        "warm-lg": "0 8px 40px oklch(var(--spice) / 0.2)",
        saffron: "0 4px 24px oklch(var(--saffron) / 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
