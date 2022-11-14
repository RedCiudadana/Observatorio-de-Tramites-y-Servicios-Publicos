const rmj = require('render-markdown-js');

module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats("njk,html,md");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('imgs');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addNunjucksFilter("rmj", function (content) {
        return rmj(content);
    });

    eleventyConfig.addNunjucksFilter("limit", function (array, limit) {
        return array.slice(0, limit);
    });
}
