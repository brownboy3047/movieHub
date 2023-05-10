module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1200px" },
      },

      colors: {
        darkbg: "#1e293b",
        blue: {
          850: "#7dd3fc",
        },
      },
    },
  },
  plugins: [],
};
