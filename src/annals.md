---
title: The Annals
description: A record of the Covenant's founding, its laws, its wars, and its people — kept as they happen, not rewritten after.
layout: layouts/base.njk
---

<p class="page-eyebrow">Chronological Record</p>
<h1 class="page-title">The Annals</h1>
<p>A record of the Covenant's founding, its laws, its wars, and its people — kept as they happen, not rewritten after.</p>

<div class="section-label">Entries</div>

{% set sortedLogs = logs | sort(true, false, 'date') %}
{% if sortedLogs.length == 0 %}
<p class="empty-state">No records yet. The first entry has not been written.</p>
{% else %}
<div class="timeline">
{% for e in sortedLogs %}
<div class="entry">
<span class="entry-date">{{ e.date }}</span><span class="entry-cat">{{ e.category or 'General' }}</span>
<h2>{{ e.title }}</h2>
<p>{{ e.body }}</p>
</div>
{% endfor %}
</div>
{% endif %}
