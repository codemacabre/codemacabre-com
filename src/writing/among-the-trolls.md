---
title: "Book notes: Among the Trolls"
description: "Notes on the book 'Among the Trolls' by Marianna Spring."
date: 2024-07-05
---

{% for book in books %}
  {% if book.title === 'Among the Trolls' %}
  <div class="card">
    <img class="greyscale" src="{{ book.cover.src }}" width="{{ book.cover.width / 2 }}" height="{{ book.cover.height / 2 }}" alt="{{ book.cover.alt }}" />
    <p><strong>{{ book.title }}</strong> by {% for entity in book.author %}{% if book.author.length > 1 %}{% if entity === book.author[book.author.length - 1] %}{{ entity }}{% else %}{{ entity }}, {% endif %}{% else %}{{ entity }}{% endif %}{% endfor %}</p><div class="status-container">{% if book.status !== 'to read' %}<div class="status"><p>{{ book.status }}</p></div>{% endif %}</div>
  </div>
  {% endif %}
{% endfor %}

Empathy is a key feature of this book.

The first few chapters are largely focussed on individuals and their experiences either as conspiracy theorists themselves, or as others on the receiving end of conspiracies. This provides context for Chapter 4, 'Escaping the Rabbit Hole', where Spring explores the stories of those who were once part of the world of conspiracy theories and have since left.

Towards the end of the chapter, she goes on to describe methods to help others. Rather than resorting to mockery or ridicule, the focus instead is on empathy and understanding.

> It's only by taking a new, less judgemental and more inquisitive approach that the likelihood of at least a few people clambering out of the rabbit hole becomes possible.

Spring notes that many conspiracy theorists are victims rather than villains, and taking their underlying fears and concerns more seriously is important in reducing the dismissive attitudes we often resort to.

Later chapters describe tales of misinformation (accidental false information) and disinformation (deliberately false information), sharing winding narratives of confusing, complex half-truths. The focus is, naturally, on media, particularly social media and eventually reaches the subject of the titular trolls.

Marianna Spring is, unfortunately, on the receiving-end of considerable abuse online. While some of this abuse undoubtedly comes from simply being a woman online, trolls are attracted to attack her particularly due to the role she plays in reporting disinformation, consipiracy theories and hate.

In chapter 6, 'Shock Troops', horrible accounts of abusive behaviour are given, spilling from online to offline. Yet some level of empathy is shown to them, as to conspiracy theorists earlier.

> I have found time and time again that acute difficulties at home can leave someone more vulnerable to being drawn into a world of hate and abuse that preys on unhappiness and distrust.

While the book far from forgives perpetrators of abuse and hate, and disseminators of extreme views, it does encourage a broader perspective on the people behind the actions. The explanation for some of this abusive online behaviour is laid upon the polarizing and dehumanizing aspect of social media, and the book goes on to ask whether social media _creates_ these trolls.

Examples of misogynistic hate and racist abuse highlight how social media fails to protect those most vulnerable, instead exacerbating and encouraging this type of behaviour, and attempts to report abuse, either to the platforms themselves or to the police, tend to fall flat.

> We've accepted online hate as part of the fabic of our society, as though it's just something that we should expect now social media exists. As a consequence, the onus falls on the individual to call out and battle these trolls.

The remainder of the book largely investigates social media itself, from algorithms which normalise abuse and disinformation to bot accounts, while recounting further tragic tales of abuse and hatred. The conclusion is far from optimistic, describing the futile and sometimes disingenuous attempts social media companies make to curb abuse on their platforms. In the final few pages, Spring makes some recommendations to social platforms and governments, focussed on restoring trust, but acknowledges that the book marks a moment in time in an ever-chaging landscape.

'Among the Trolls' is a more descriptive than analytical exploration of the world of conspiracy theories, disinformation and hate, leading us on a sometimes-harrowing journey through real world experiences. A book like this is essential reading to explore some of the more extreme thoughts and behaviours spreading on- and offline that we may only be unaware of, with some encouraging, empathic guidelines to navigating this world ourselves and some thought-provoking recommendations for increased platform safety.

---

Browse the rest of my [bookshelf](/reading). {% set notes = 0 %}{% for book in books %}{% if book.url %}{% set notes = notes + 1 %}{% endif %}{% endfor %} {{ notes }} {% if notes === 1 %} book has {% else %} books have {% endif %} notes like this one.
