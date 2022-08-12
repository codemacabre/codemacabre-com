const md = require('markdown-it')
const mdAttrs = require('markdown-it-attrs')
const pluginRss = require('@11ty/eleventy-plugin-rss')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('scripts')
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/styles/**/*.css'
  })

  // Libraries
  const mdLibrary = md({
    html: true,
    linkify: true,
    typographer: true
  }).use(mdAttrs)

  eleventyConfig.setLibrary('md', mdLibrary)

  // Plugins
  eleventyConfig.addPlugin(pluginRss)

  // Custom filters
  eleventyConfig.addLiquidFilter('dateToRfc3339', pluginRss.dateToRfc3339)
  eleventyConfig.addLiquidFilter('getNewestCollectionItemDate', pluginRss.getNewestCollectionItemDate)
  eleventyConfig.addLiquidFilter('absoluteUrl', pluginRss.absoluteUrl)
  eleventyConfig.addLiquidFilter('convertHtmlToAbsoluteUrls', pluginRss.convertHtmlToAbsoluteUrls)
}
