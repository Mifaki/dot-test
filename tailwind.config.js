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
        accent: "#E11D48",
        "accent-dark": "#E40939",
        "accent-blue": "#1446A0",
        "accent-blue-dark": "#1446A0",
        "accent-yellow": "#1446A0",
        "accent-yellow-dark": "#1446A0",
        "accent-turq": "#1446A0",
        "accent-turq-dark": "#1446A0",
        "accent-pruple": "#1446A0",
        "accent-pruple-dark": "#1446A0"
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
