module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',"./node_modules/flowbite/**/*.js"],
  important: '#root',
  darkMode: 'class',
  theme: {
    colors: {
      darker: "#0a0e23",
      lightdark: "#1c275c",
      lightest: "#2b3980",
      transgender: "transparent",
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
