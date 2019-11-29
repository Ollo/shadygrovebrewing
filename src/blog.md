---
layout: layouts/layout.njk
title: Shady Grove Brewing Company Blog
---

## Welcome to the Shady Grove Brewing Company Blog

Here I  write posts about my homebrewing process, history and inspirations.

{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <p>{{ page.data.excerpt }}</p>
  </li>
{%- endfor -%}
