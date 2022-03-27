module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        link: "var(--color-link)",
      },
      boxShadow: {
        link: "0 1px 0 0 var(--color-link)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
