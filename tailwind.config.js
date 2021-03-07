module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        "red-border": "hsl(0, 78%, 62%)",
        "cyan-border": "hsl(180, 62%, 55%)",
        "orange-border": "hsl(34, 97%, 64%)",
        "blue-border": "hsl(212, 86%, 64%)",
        "very-dark-blue": "hsl(234, 12%, 34%)",
        "grayish-blue": "hsl(229, 6%, 66%)",
        "very-light-gray": "hsl(0, 0%, 98%)"
      },
      spacing: {
        62: "15.625rem",
        18: "4.5rem",
        7: "1.8125rem",
        5: "1.25rem",
        22: "5.625rem",
        87: "21.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
