module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["JetBrains Mono", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
