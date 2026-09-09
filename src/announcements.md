---
title: Announcements
description: News and official communications from the Vyzkaris Covenant.
layout: layouts/base.njk
---

<p class="page-eyebrow">Official Communications</p>
<h1 class="page-title">Announcements</h1>
<p>News and notices from the Covenant — separate from the permanent Records archive, this is where current announcements are posted.</p>

<div class="section-label">Latest</div>

{% set sortedAnnouncements = announcements | sort(true, false, 'date') %}
{% if sortedAnnouncements.length == 0 %}
<p class="empty-state">No announcements yet.</p>
{% else %}
<div class="timeline">
{% for a in sortedAnnouncements %}
<div class="entry">
<span class="entry-date">{{ a.date }}</span>{% if a.category %}<span class="entry-cat">{{ a.category }}</span>{% endif %}
<h2>{{ a.title }}</h2>
<p>{{ a.body }}</p>
</div>
{% endfor %}
</div>
{% endif %}
