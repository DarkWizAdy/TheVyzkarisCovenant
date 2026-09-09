---
title: Covenant Resources
description: Guides, kits, maps, and templates the Covenant provides to its citizens.
layout: layouts/base.njk
wide: true
---

<p class="page-eyebrow">For Citizens</p>
<h1 class="page-title">Covenant Resources</h1>
<p>Guides, starter kits, maps, and templates the Covenant provides to its people. Files are hosted on Google Drive — each link opens directly.</p>

{% if resources.length == 0 %}
<p class="empty-state">No resources published yet. Check back once the archive has been stocked.</p>
{% else %}
{% set grouped = resources | groupBy("category") %}
{% for category, items in grouped %}
<div class="resource-group">
<p class="resource-group-title">{{ category }}</p>
<div class="resource-grid">
{% for r in items %}
<div class="resource-card">
<h3>{{ r.title }}</h3>
<p>{{ r.description }}</p>
<a href="{{ r.driveLink }}" target="_blank" rel="noopener">Open</a>
</div>
{% endfor %}
</div>
</div>
{% endfor %}
{% endif %}
