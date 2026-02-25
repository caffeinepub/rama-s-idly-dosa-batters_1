/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'Inter', 'sans-serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        spice: {
          DEFAULT: '#7B2D2D',
          light: '#9B4040',
          dark: '#5A1E1E',
          50: '#fdf4f4',
          100: '#fce8e8',
          600: '#7B2D2D',
          700: '#6B2020',
          800: '#5A1E1E',
          900: '#3D1212',
        },
        saffron: {
          DEFAULT: '#D4820A',
          light: '#E89A20',
          dark: '#B06A05',
        },
        ink: {
          DEFAULT: '#2A1A0E',
          light: '#4A3020',
          dark: '#160D05',
        },
        cream: {
          DEFAULT: '#FAF6EF',
          dark: '#F0E8D8',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'card': '0 1px 8px rgba(60,20,10,0.07), 0 2px 4px rgba(60,20,10,0.04)',
        'card-hover': '0 6px 24px rgba(60,20,10,0.12), 0 2px 8px rgba(60,20,10,0.06)',
        'spice': '0 4px 14px rgba(123, 45, 45, 0.28)',
        'saffron': '0 4px 14px rgba(212, 130, 10, 0.28)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}
