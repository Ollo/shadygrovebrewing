---
layout: layouts/layout.njk
title: Shady Grove Brewing Company
---

## Welcome to Shady Grove Brewing Company

This is the home brewing blog of Joshua Ray.
I run a 5 gallon stainless steel all grain single infusion mash system from Ss brewtech. I keg and bottle and plan to have hops and barley grown onsite. I've been an assistant brewer to friends for many years and this year I have embarked on my own brewing adventure.

#### What follows are my brew day logs, recipes and equipment updates.

<ul class="listing">

{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
  </li>
{%- endfor -%}
</ul>