const Image = require("@11ty/eleventy-img");

module.exports = {
  image: async function (src, alt, cls) {
    let metadata = await Image(`./src/assets/images/${src}`, {
      widths: [null],
      formats: ["avif", "webp", "jpeg"],
      urlPath: "/assets/images",
      outputDir: "dist/assets/images",
    });

    let imageAttributes = {
      class: cls,
      alt,
    };

    return Image.generateHTML(metadata, imageAttributes);
  },
};
