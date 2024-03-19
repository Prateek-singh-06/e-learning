/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "custom-top": "70px",
        "padding-home": "15%",
        "custom-height": "40%",
        customh: "360px",
        one: "1px",
      },
      colors: {
        custombg: "#42454d",
        custombg2: "#282c34",
      },
    },
  },
  plugins: [],
};
