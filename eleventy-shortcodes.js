module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("styles");

  // Return config
  return {
    dir: {
      input: "src",
      includes: "_includes",   // <— CORRECT
      layouts: "_includes",    // <— CORRECT
      data: "_data",
      output: "_site"
    }
  };
};
