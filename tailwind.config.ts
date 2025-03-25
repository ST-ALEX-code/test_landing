import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        green: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      boxShadow: {
        plant:
          "0px 2.32px 1.85px 0px rgba(0, 0, 0, 0.04), 0px 5.39px 4.31px 0px rgba(0, 0, 0, 0.06), 0px 9.68px 7.74px 0px rgba(0, 0, 0, 0.08), 0px 16.06px 12.85px 0px rgba(0, 0, 0, 0.09), 0px 26.45px 21.16px 0px rgba(0, 0, 0, 0.11), 0px 46.23px 36.99px 0px rgba(0, 0, 0, 0.13), 0px 100px 80px 0px rgba(0, 0, 0, 0.17)",
        card: "0px 0.54px 1.59px 0px rgba(0, 0, 0, 0.03), 0px 1.22px 3.62px 0px rgba(0, 0, 0, 0.04), 0px 2.13px 6.31px 0px rgba(0, 0, 0, 0.05), 0px 3.38px 10.02px 0px rgba(0, 0, 0, 0.06), 0px 5.22px 15.46px 0px rgba(0, 0, 0, 0.07), 0px 8.14px 24.12px 0px rgba(0, 0, 0, 0.08), 0px 13.51px 40.04px 0px rgba(0, 0, 0, 0.09), 0px 27px 80px 0px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "gradient-border":
          "linear-gradient(95.32deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 52.5%, rgba(255, 255, 255, 0.45) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

