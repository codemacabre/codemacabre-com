---
title: "Book notes: Among the Trolls"
date: 2024-07-03
description: "Notes on the book 'Among the Trolls' by Marianna Spring."
tags:
  - book notes
draft: true
---

{% for book in books %}
  {% if book.title === 'Among the Trolls' %}
  <div class="card">
    <img class="greyscale" src="{{ book.cover.src }}" width="{{ book.cover.width / 2 }}" height="{{ book.cover.height / 2 }}" alt="{{ book.cover.alt }}" />
    <p><a href="{{ book.url }}">{{ book.title }}</a> by {% for entity in book.author %}{% if book.author.length > 1 %}{% if entity === book.author[book.author.length - 1] %}{{ entity }}{% else %}{{ entity }}, {% endif %}{% else %}{{ entity }}{% endif %}{% endfor %}</p><div class="status-container">{% if book.status !== 'to read' %}<div class="status"><p>{{ book.status }}</p></div>{% endif %}</div>
  </div>
  {% endif %}
{% endfor %}

Empathy is a key feature of this book.

The first few chapters are largely focussed on individuals and their experiences either as conspiracy theorists themselves, or as others on the receiving end of conspiracies. This provides context for Chapter 4, 'Escaping the Rabbit Hole', where Spring explores the stories of those who were once part of the world of conspiracy theories and have since left.

Towards the end of the chapter, she goes on to describe methods to help others. Rather than resorting to mockery or ridicule, the focus instead is on empathy and understanding.

> It's only by taking a new, less judgemental and more inquisitive approach that the likelihood of at least a few people clambering out of the rabbit hole becomes possible.

Spring notes that many conspiracy theorists are victims rather than villains, and taking their underlying fears and concerns more seriously is important in reducing the dismissive attitudes we often resort to.

---

Read more [book notes](/writing/book-notes), or see what else is on my [bookshelf](/reading).
