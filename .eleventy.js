const md = require('markdown-it')
const mdAttrs = require('markdown-it-attrs')
const eleventyPluginRss = require('@11ty/eleventy-plugin-rss')

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
  eleventyConfig.addPlugin(eleventyPluginRss)

  // Custom filters
  eleventyConfig.addLiquidFilter('dateToRfc3339', eleventyPluginRss.dateToRfc3339)
  eleventyConfig.addLiquidFilter('getNewestCollectionItemDate', eleventyPluginRss.getNewestCollectionItemDate)
  eleventyConfig.addLiquidFilter('absoluteUrl', eleventyPluginRss.absoluteUrl)
  eleventyConfig.addLiquidFilter('convertHtmlToAbsoluteUrls', eleventyPluginRss.convertHtmlToAbsoluteUrls)
}
