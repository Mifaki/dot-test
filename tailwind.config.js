/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        background: "#0C0A09",
        "text-primary": "#F2F2F2",
        card: "#1C1917",
        border: "#27272A",
        accent: "#E11D48",
        "accent-dark": "#E40939",
        "accent-blue": "#1446A0",
        "accent-blue-dark": "#113C88",
        "accent-yellow": "#E0BF2C",
        "accent-yellow-dark": "#D6B41F",
        "accent-turq": "#0BAC9A",
        "accent-turq-dark": "#0A9585",
        "accent-purple": "#2B061E",
        "accent-purple-dark": "#240519"
      },
      fontFamily: {
        sans: [
          'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          { fontFeatureSettings: '"cv02", "cv03", "cv04", "cv11"' },
        ],
      },
    },
  },
  plugins: [],
};
