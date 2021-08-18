module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          default: "#025F44",
          light: "#ADE6BB",
          dark: "#003D2B",
          text: "#314D43",
        },
        pink: "#E4C2B1",
        yellow: "#E6E5AD",
      },
      fontFamily: {
        body: ["Montserrat"],
        heading: ["Gill Sans MT"],
      },
      fontSize: {
        sm: ["16px"],
        base: ["24px"],
        lg: ["30px"],
        xl: ["40px"],
        logo: ["36px"],
      },
      lineHeight: {
        heading: "70px",
        body: "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
