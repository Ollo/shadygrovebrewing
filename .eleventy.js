module.exports = function(config) {
  config.setDynamicPermalinks(false);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },
    passthroughFileCopy: true,
    templateFormats : [
      "njk", 
      "md",
      "css",
      "png",
      "jpg",
      "ico"
    ],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};