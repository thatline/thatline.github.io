module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("src/data/lines.json");
};