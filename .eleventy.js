module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({ "./public/*": "/" });
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
