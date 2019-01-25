---
layout: layouts/home-layout.njk
title: Shady Grove Brewing Company
---

### Welcome to Shady Grove Brewing Company


<ul class="listing">

{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
  </li>
{%- endfor -%}
</ul>