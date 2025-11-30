/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Amiri (Used for elegant/classic text)
        amiri: ["Amiri"],

        // Fruktur (A unique, decorative font)
        // Note: Tailwind utility will be 'font-fruktur'
        fruktur: ["Fruktur", "cursive"],

        // Kaushan Script (A handwritten script)
        // Note: Tailwind utility will be 'font-kaushan'
        kaushan: ["Kaushan Script", "cursive"],

        // Roboto (A popular, versatile sans-serif)
        // Note: Tailwind utility will be 'font-roboto'
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
