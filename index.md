---
layout: posts
title: "Bài viết"
author_profile: true
sidebar:
  nav: "sidebar"
---
<!-- Phần hiển thị danh sách bài viết bắt đầu -->
<ul>
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <small>{{ post.date | date: "%d/%m/%Y" }}</small>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </li>
  {% endfor %}
</ul>
<!-- Phần hiển thị danh sách bài viết kết thúc -->
