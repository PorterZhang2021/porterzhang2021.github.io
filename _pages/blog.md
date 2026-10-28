---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="post">
  <header class="page-heading">
    <h1>Notes</h1>
    <p>Engineering notes on systems, software, and learning</p>
  </header>

{% assign postlist = paginator.posts | default: site.posts %}
{% if postlist.size > 0 %}

<ul class="post-list">
{% for post in postlist %}
{% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
<li>
<h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
<p>{{ post.description }}</p>
<p class="post-meta">{{ read_time }} min read &nbsp; &middot; &nbsp; {{ post.date | date: '%B %d, %Y' }}</p>
</li>
{% endfor %}
</ul>
{% include pagination.liquid %}
{% else %}
<p>No notes published yet.</p>
{% endif %}

</div>
