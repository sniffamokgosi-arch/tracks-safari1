---
layout: default.njk
title: Home
---

{% for page in collections.all | reverse %}
  <article>
    <h2><a href="{{ page.url }}">{{ page.data.title }}</a></h2>
    <div>{{ page.templateContent | safe }}</div>
  </article>
{% endfor %}
