---
title: Records
description: A record of the Covenant's founding, its laws, its wars, and its people — kept as they happen, not rewritten after.
layout: layouts/base.njk
---

<p class="page-eyebrow">Chronological Record</p>
<h1 class="page-title">Records</h1>
<p>A record of the Covenant's founding, its laws, its wars, and its people — kept as they happen, not rewritten after.</p>

<div class="cta-box">
<p class="cta-box-title">Submit a Record</p>
{% if site.recordsFormUrl %}
<p>Citizens may propose a new record for the archive below.</p>
<a class="cta-button" href="{{ site.recordsFormUrl }}" target="_blank" rel="noopener">Open the Form</a>
{% else %}
<p class="empty-state">The submission form is being set up. Check back soon.</p>
{% endif %}
</div>

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
