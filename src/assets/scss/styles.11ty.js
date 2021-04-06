const path = require("path");
const sass = require("sass");

module.exports = class {
  data() {
    return {
      permalink: "assets/styles/main.css",
      eleventyExcludeFromCollections: true,
    };
  }

  render() {
    const { css } = sass.renderSync({ file: path.join(__dirname, "/main.scss") });
    return css;
  }
};
