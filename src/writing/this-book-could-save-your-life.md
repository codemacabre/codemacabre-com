---
title: "Book notes: This Book Could Save Your Life"
description: "Notes on the book 'This Book Could Save Your Life' by Ben West."
date: 2024-08-19
---

{% for book in books %}
  {% if book.title === 'This Book Could Save Your Life' %}
  <div class="card">
    <img class="greyscale" src="{{ book.cover.src }}" width="{{ book.cover.width / 2 }}" height="{{ book.cover.height / 2 }}" alt="{{ book.cover.alt }}" />
    <p><strong>{{ book.title }}</strong> by {% for entity in book.author %}{% if book.author.length > 1 %}{% if entity === book.author[book.author.length - 1] %}{{ entity }}{% else %}{{ entity }}, {% endif %}{% else %}{{ entity }}{% endif %}{% endfor %}</p><div class="status-container">{% if book.status !== 'to read' %}<div class="status"><p>{{ book.status }}</p></div>{% endif %}</div>
  </div>
  {% endif %}
{% endfor %}

'This Book Could Save Your Life' is an autobiography, with a call to action for better mental health policies and practices in the UK, particularly around suicide prevention.

Ben West's personal story revolves around the events told in chapter 2, '21st Jan 2018', a tragic evening when his younger brother Sam died from suicide. The chapter goes recounts how Ben and his family discovered Sam and attempted to help him, and the aftermath of Sam's death. It isn't at all gratuitous, but provides enough raw personal detail that it isn't an easy listen.

> We are human beings, not human doings.

Interspersed with guidance, such as an outline of how to perform CPR, how to identify depression as a mental illness and general tips on take better care of ourselves mentally, the primary narrative in the book is how Sam's death affected Ben's life trajectory, turning him into a camapigner and activist for improving mental health policies in the UK.

Ben's work in mental health and suicide prevention is fantastic. He doesn't shy away from expressing his anger and frustration at polititians, including ones he's met, and their empty promises. He calls for improvements in the education system in particular, while maintaining the humility of someone still surprised he is as influential as he is.

The audiobook version of this book is narrated by Ben West himself and feels like it is being told by someone we know, complete with the occasional chuckle and bad joke, and considerable swearing.

'This Book Could Save Your Life' is a worthwhile read that, while likely of more substantial use to those less familiar with mental health as a concept, especially depression and suicide, is a powerful reminder of the ongoing fight for recognition and action needed to combat poor mental health.

***

Browse the rest of my [bookshelf](/reading). {% set notes = 0 %}{% for book in books %}{% if book.url %}{% set notes = notes + 1 %}{% endif %}{% endfor %} {{ notes }} {% if notes === 1 %} book has {% else %} books have {% endif %} notes like this one.
