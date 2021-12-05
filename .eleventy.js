module.exports = function(eleventyConfig) {
   
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("img");
};