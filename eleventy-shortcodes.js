
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", async function(src, alt, sizes="100vw") {
    if(!src) return "";
    let srcPath = path.join("assets/images", src.replace(/^\//, ""));
    let metadata = await Image(srcPath, {
      widths: [300, 600, 1200],
      formats: ["webp","jpeg"],
      outputDir: "./_site/assets/images/",
      urlPath: "/assets/images/"
    });
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async"
    };
    return Image.generateHTML(metadata, imageAttributes);
  });
};
