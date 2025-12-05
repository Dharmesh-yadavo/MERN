// import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   floatBG: {
      //     "0%": { transform: "scale(1) translateY(0px)" },
      //     "50%": { transform: "scale(1.03) translateY(-500px)" },
      //     "100%": { transform: "scale(1) translateY(0px)" },
      //   },
      // },
      // animation: {
      //   floatBG: "floatBG 8s ease-in-out infinite",
      // },
      extend: {
        keyframes: {
          halfCircleUp: {
            "0%": {
              transform: "translateY(0) scale(1)",
              background:
                "radial-gradient(circle, rgba(253,165,254,1), rgba(185,95,186,0.6))",
              opacity: "0.8",
            },
            "50%": {
              background:
                "radial-gradient(circle, rgba(185,95,186,1), rgba(253,165,254,0.6))",
              opacity: "1",
            },
            "100%": {
              transform: "translateY(-400px) scale(1.2)",
              background:
                "radial-gradient(circle, rgba(253,165,254,1), rgba(185,95,186,0.4))",
              opacity: "0",
            },
          },
        },
        animation: {
          halfCircleUp: "halfCircleUp 8s ease-in-out infinite",
        },
      },

      fontFamily: {
        amiri: ["Amiri"],
        fruktur: ["Fruktur", "cursive"],
        kaushan: ["Kaushan Script", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
