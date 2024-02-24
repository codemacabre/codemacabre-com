---
title: Starting fresh
date: 2024-02-24T17:50
description: "Celebrating another site rewrite, this time built with Eleventy."
---

Like many of you, I rewrite my website often. Perhaps too often considering the minimal amount of content on it.

My previous site was built using [Nuxt](https://nuxt.com), partly because I was using [Vue](https://vuejs.org) for work. However, the use of so much JavaScript to build such a static site feels wrong and I felt I should either revert to using [Eleventy](https://11ty.dev) or learn [Astro](https://astro.build).

### Zero JavaScript by default

Astro and Eleventy both share something very nice and that's the ability to program in HTML and CSS without the need for JavaScript to get in the way&hellip; unless I want it to. My website doesn't need much in the way of interaction, so it doesn't need much JavaScript.

There are [other similarities](https://cloudcannon.com/blog/eleventy-11ty-vs-astro/) between the two technologies, but as I'd used Eleventy before, I chose to learn the new tech, Astro.

### Keeping things minimal with Astro
I like to start from as minimal a setup as possible and drop things in as I need them. Astro has a nice [Build a Blog](https://docs.astro.build/en/tutorial/0-introduction/) tutorial which incrementally adds features, so I started with that. Within seconds (and guided by a very cute in-terminal mascot), I had a couple of folders, a couple of configuration files and an `index.astro` file.

These `.astro` files are the backbone of Astro and are essentially HTML templating components with JavaScript in the frontmatter which renders to HTML at build time. Adding client-side JavaScript involves dropping `<script>` tags into the HTML itself, which feels very native.

I went through the tutorial and added templates, RSS and then fell down a rabbit hole of adding full post content to the RSS, then [content collections](https://docs.astro.build/en/guides/content-collections/) and eventually I ended up at a point where TypeScript was used (not _required_, mind you, but used enough to put me off).

I'd reached a path I didn't want to continue down, so I thought I'd see what it was like to build exactly the same site in Eleventy.

### Rewriting in Eleventy
Zach Leatherman has a short video tutorial, [6 Minutes to Build a Blog from Scratch with Eleventy](https://www.youtube.com/watch?v=kzf9A9tkkl4). At the time of writing, it's the most recent Eleventy guide I could find and, while I know older ones are still relevant and, most importantly, _still work_, I wanted to see what I could do 'from scratch'.

It begins with single HTML file, then adds Markdown content, and a few basic layouts and templates. Eleventy supports a number of templating languages, but I chose Nunjucks. I topped it off by tinkering with a config file to add useful features like [RSS](../../feed.xml) and a couple of template filters.

What I like so much about this is I literally started with an HTML file. It very much feels like the 'good old days' of building websites.

## Next steps
I want to learn more about Web Components and I know both Eleventy and Astro are great for that sort of thing. As I settled on Eleventy this time,  I'll be [following Zach's lead](https://www.zachleat.com/web/webc-in-eleventy/) and using [WebC](https://www.11ty.dev/docs/languages/webc/), which takes some inspiration from Vue's single file components.

In the meantime, I'll actually add some content to this site!
