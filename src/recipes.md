---
layout: layouts/layout.njk
title: Shady Grove Brewing Company Beer Recipes
---

## Beer Recipes

I'm a big believer in being open with my recipes and process as I've learned so much from the community I feel its only fair to give back what I've learned.


{%- for page in collections.recipe -%}
  <article>
    <a href="{{ page.url }}">{{ page.data.title }}</a>
    <p>{{ page.data.excerpt }}</p>
  </article>
{%- endfor -%}

<hr/>
<br/>

<div class='friends'>
  <a href="http://morebeer.com/?a_aid=shady-grove-brewing&amp;a_bid=5eef4f0c" target="_top"><img src="https://moreflavor.postaffiliatepro.com/accounts/default1/ayvdybw/5eef4f0c.jpg" alt="" title="" width="728" height="90" /></a><img style="border:0" src="https://moreflavor.postaffiliatepro.com/scripts/ayvdyiw?a_aid=shady-grove-brewing&amp;a_bid=5eef4f0c" width="1" height="1" alt="" />
  <small style='margin: 1rem; text-align: center; display: block;'>I support independent beer organizations as often as possible vs the big corporate players like amazon. 
  This is an affiliate link if your into paying it forward in exchange for my recipes.</small>

</div>
