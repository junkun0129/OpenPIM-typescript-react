/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/7": "10.2857143%",
        "1/8": "7.2857143%",
      },
      colors: {
        mainTheme: "#7A7DAE",
        mainBG: "#ECECEC",
        tableContentColor: "#7C7C7C",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".select-none": {
          "-webkit-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
      };
      addUtilities(newUtilities, {
        variants: ["responsive", "hover", "focus", "active"],
      });
    },
  ],
};
