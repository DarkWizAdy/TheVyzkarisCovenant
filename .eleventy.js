module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("groupBy", function (items, key) {
    var groups = {};
    (items || []).forEach(function (item) {
      var groupKey = item[key] || "Other";
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);
    });
    return groups;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/TheVyzkarisCovenant/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
