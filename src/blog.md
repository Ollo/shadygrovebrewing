---
layout: layouts/layout.njk
title: Shady Grove Brewing Company Blog
---

## Welcome to the Shady Grove Brewing Company Blog

Here are some thoughts about my homebrewing process, tools and equipment and inspirations.

{%- for page in collections.post -%}
  <article>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <p>{{ page.data.excerpt }}</p>
  </article>
{%- endfor -%}
