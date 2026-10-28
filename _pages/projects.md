---
layout: page
title: work
permalink: /projects/
description: Systems and tools I build, maintain, and study.
nav: true
nav_order: 3
---

<div class="work-list">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    <article class="work-item">
      <p class="work-item__index">0{{ forloop.index }}</p>
      <div class="work-item__body">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <a class="text-link" href="{{ project.github }}">GitHub repository <span aria-hidden="true">↗</span></a>
        {% if project.redirect %}
          <span class="work-item__divider">/</span>
          <a class="text-link" href="{{ project.redirect }}">Project site <span aria-hidden="true">↗</span></a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>
