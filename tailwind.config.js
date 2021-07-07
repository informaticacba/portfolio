const color = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#141414",
        startpoint: "#222E4A",
        midpoint: "#501717",
        gray: color.trueGray,
        red: color.rose,
      },
      typography: {
        DEFAULT: {
          css: {
            color: color.gray[400],
            code: {
              color: color.white,
            },
            "h1, h2": {
              color: color.gray[100],
            },
            "h3, h4, h5, h6, strong": {
              color: color.gray[200],
            },
            blockquote: {
              backgroundColor: color.trueGray[700],
              color: color.gray[100],
            },
            "table, th, td, tr": {
              color: color.gray[200],
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      skew: ["active", "group-hover"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
