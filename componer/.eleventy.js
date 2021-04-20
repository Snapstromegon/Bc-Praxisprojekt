const yaml = require("js-yaml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
  eleventyConfig.addDataExtension("yaml", (contents) =>
    yaml.safeLoad(contents)
  );
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addWatchTarget("./assets/");
  eleventyConfig.addPassthroughCopy("src/**/assets/**");
  eleventyConfig.addWatchTarget("src/**/assets/**");

  return {
    dir: {
      input: "src",
      ouput: "_site",
    },
  };
};
