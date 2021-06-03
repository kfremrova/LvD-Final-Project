const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
  //plugin pro navigaci
  eleventyConfig.addPlugin(eleventyNavigationPlugin);  
  // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
    //Zkopírovat favicony/ do _site/icon
    eleventyConfig.addPassthroughCopy("icon");
    //Zkopírovat lightbox/ do _site/js
    eleventyConfig.addPassthroughCopy("js");
    return {
        // možné formáty šablon
        templateFormats: ["njk","html", "md", "liquid"],
        // jako šablonovací jazyk zvolíme Nunjucks`
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }    
   };
   