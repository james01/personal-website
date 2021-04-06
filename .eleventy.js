const transforms = require("./utils/transforms.js");
const shortcodes = require("./utils/shortcodes.js");

module.exports = function (config) {
  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    config.addShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  // Template formats
  config.setTemplateFormats(["html", "11ty.js"]);

  // Asset watch targets
  config.addWatchTarget("./src/assets");

  // Passthrough files
  config.addPassthroughCopy("./src/site.webmanifest");
  config.addPassthroughCopy("./src/assets/other");
  config.addPassthroughCopy("./src/assets/images/favicon");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
  };
};
