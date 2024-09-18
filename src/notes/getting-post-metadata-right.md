---
title: Getting post metadata right
date: 2024-03-02T13:41Z
update: 2024-08-22T08:35Z
description: "Tips for tagging post and RSS content correctly."
category: "article"
---

I've been through various read-it-later apps. [Readwise Reader](https://readwise.io/read) is my current favourite, but I'm also fond of [Omnivore](https://omnivore.app/). Notably, both apps also allow subscribing to RSS feeds and both sync my highlights to [Obsidian](https://obsidian.md/).

It's generally a great workflow. Until, that is, I happen upon some mis-tagged metadata.

### The author
The more I've used these apps, the more I've noticed RSS feeds having the feed title listed as the author; I had this issue in my own [RSS feed](../../feed.xml) until a bit of trial-and-error helped to resolve it.

Depending on whether you're using RSS or Atom (both XML-based specification but with a [number of differences](https://css-tricks.com/working-with-web-feeds-its-more-than-rss/)), you will need to tag the author using either a `<dc:creator>` element (for RSS) or an `<author>` element (for Atom):

```xml
<dc:creator>Myles Lewando</dc:creator>
```

or

```xml
<author>
  <name>Myles Lewando</name>
</author>
```

For RSS, this also requires the `xmlns:dc` attribute on the `rss` element.
```xml
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">
```

For apps which parse the page rather than use an RSS feed, the author should be similarly defined, this time in a `<meta>` element in your page's `<head>`:

```html
<meta name="author" content="Myles Lewando">
```

### The title
For each post, add a `<title>` element. This applies to both RSS and Atom.

```xml
<title>{{ title }}</title>
```

Most read-it-later apps I've used parse the page `<title>` which often results in the post title with the site name appended. This isn't the worst thing in the world, but I still find myself editing items in my reading list to remove the site name.

There doesn't appear to be a workaround without removing the site title from the page `<title>`, which is [not recommended](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title#accessibility_concerns).

### Descriptions and content
In RSS feeds, the page content _can_ be added to the `<description>` element, but it's not really what it's designed for. Instead a post description or excerpt should go there, and the page content should go in a `<content:encoded>` element (for Atom, only the `<content>` part is needed).

For RSS, this requires the `xmlns:content` attribute to be added to the `rss` element:

```xml
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
```

Read-it-later apps are particularly good at scraping the post content and outputting it in an easy-to-read format, so nothing special is required here. Provided you don't hide half of your content behind a login or paywall.

### The date
RSS requires the post date to be entered in a [valid format](https://cyber.harvard.edu/rss/rss.html#ltpubdategtSubelementOfLtitemgt) to a `<pubDate>` element. Atom similarly uses a `<published>` element.

I haven't figured out how read-it-later apps parse the post date from the page. Success seems to depend on the format of the date. I put my dates in [`<time>` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time), which seems to help (and benefits from being more accessible):

```html
<time datetime="{{ date }}">02/03/2024</time>
```

* * *

I'm sure a lot of the issues are due to the apps not parsing pages quite right (and because there are endless ways to write your content, it's understandable). These tips I've discovered through trial-and-error to make the read-it-later apps I use display my posts correctly.

It's immensely satisfying to encounter an article which has everything tagged correctly and I hope this helps you work through the nuances of  tagging your writing, too.
