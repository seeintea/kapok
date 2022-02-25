module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "tag-a": "var(--color-tag-a)",
      },
      boxShadow: {
        "tag-a": "0 1px 0 0 var(--color-tag-a)",
      },
    },
  },
  plugins: [],
}
