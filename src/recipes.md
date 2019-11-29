---
layout: layouts/layout.njk
title: Shady Grove Brewing Company Beer Recipes
---

## Beer Recipes

I'm a big believer in being open with my recipes and process as I've learned so much from the community I feel its only fair to give back what I've learned.

{%- for page in collections.recipe -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <p>{{ page.data.excerpt }}</p>
  </li>
{%- endfor -%}
