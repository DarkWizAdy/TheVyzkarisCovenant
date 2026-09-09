---
title: Gallery
description: A visual record of the Covenant — ceremonies, territories, and its people.
layout: layouts/base.njk
wide: true
---

<p class="page-eyebrow">Visual Record</p>
<h1 class="page-title">Gallery</h1>

{% if gallery.length == 0 %}
<p class="empty-state">No images yet. The gallery will grow as the Covenant's history is captured.</p>
{% else %}
{% set sortedGallery = gallery | sort(false, false, 'order') %}
<div class="gallery-grid">
{% for g in sortedGallery %}
<div class="gallery-item">
<img src="{{ ('/assets/images/gallery/' + g.file) | url }}" alt="{{ g.alt }}" loading="lazy">
{% if g.caption %}<p class="gallery-caption">{{ g.caption }}</p>{% endif %}
</div>
{% endfor %}
</div>
{% endif %}
