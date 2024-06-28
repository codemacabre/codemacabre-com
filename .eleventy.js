import pluginCodeClipboard from 'eleventy-plugin-code-clipboard'
import pluginRss from '@11ty/eleventy-plugin-rss'
import pluginWebC from '@11ty/eleventy-plugin-webc'
import markdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItBracketedSpans from 'markdown-it-bracketed-spans'

export default function (config) {
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  
  const markdownLib = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItBracketedSpans)
    .use(pluginCodeClipboard.markdownItCopyButton, {
      buttonStyle: ''
    })
  
  config.setLibrary('md', markdownLib)

  config.addPassthroughCopy({
		'./public/': '/'
  })

  config.addPlugin(pluginCodeClipboard, {
    buttonClass: 'code-copy'
  })
  config.addPlugin(pluginRss)
  config.addPlugin(pluginWebC, {
    components: "_includes/**/*.webc"
  })

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
    return collectionApi.getFilteredByTag('projects').sort(function(a, b) {
      return a.data.title.localeCompare(b.data.title)
    })
  })
  config.addCollection('published_writing', function (collectionApi) {
    return collectionApi.getFilteredByTags('writing').filter((post) => !post.data.draft)
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
