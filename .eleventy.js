import pluginRss from '@11ty/eleventy-plugin-rss'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'


export default function (config) {
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  
  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
  config.setLibrary('md', markdownLib)

  config.addPassthroughCopy({
		'./public/': '/'
  })

  config.addPlugin(pluginRss)

  config.addNunjucksFilter('limit', (arr, limit) => arr.slice(0, limit))
  config.addNunjucksFilter('date', (date, format) => {
    const parsedDate = new Date(date)
    let options

    if (format === 'full') {
      options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    } else if (format === 'year') {
      options = {
        year: 'numeric'
      }
    }
    return parsedDate.toLocaleDateString('en-GB', options)
  })
  config.addCollection('a_to_z_projects', function (collectionApi) {
    return collectionApi.getFilteredByTag("projects").sort(function(a, b) {
      return a.data.title.localeCompare(b.data.title)
    })
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  }
}