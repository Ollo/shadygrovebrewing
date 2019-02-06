---
layout: layouts/layout.njk
title: Shady Grove Brewing Company
---

## Welcome to Shady Grove Brewing Company

<section class='intro'>
<img src='./images/profile.jpg' class='profile'/> My name is Joshua Ray and this is my personal home brewing blog.
I'm a bit of a beer nerd and recently started homebrewing on a 5 gallon stainless steel all grain single infusion mash system from SsBrewtech in my garage. This site is an attempt to catalog all of my choices and experiments in building a brewing system, designing recipes and choosing and growing my own ingredients. I hope you find some of my experiments and learnings useful. Cheers 🍺
</section>

---

<ul class="listing">

{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <p>{{ page.data.excerpt }}</p>
  </li>
{%- endfor -%}
</ul>
