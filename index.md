---
layout: default
title: "Trang chủ"
---

# Blog của tôi

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
{{ post.date | date: "%d/%m/%Y" }}

{{ post.excerpt | truncate: 200 }}

[Đọc tiếp →]({{ site.baseurl }}{{ post.url }})
<hr>
{% endfor %}
