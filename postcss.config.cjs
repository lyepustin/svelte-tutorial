const tailwindcss = require("tailwindcss");
const cssimport = require("postcss-import");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    cssimport(),
    tailwindcss(),
    autoprefixer(),
  ],
};

module.exports = config;
