---
title: Home
description: The Vyzkaris Covenant — an organized civilization built on order, cooperation, strength, and opportunity.
layout: layouts/base.njk
wide: true
---

<p class="page-eyebrow">Welcome</p>
<h1 class="page-title">The Vyzkaris Covenant</h1>

<p>The Vyzkaris Covenant is an organized civilization built upon order, cooperation, strength, and opportunity. It exists as a unified community within a chaotic world, providing its members with security, infrastructure, representation, and the freedom to pursue their own ambitions.</p>

<p>The Covenant is neither solely a kingdom nor solely an enterprise. It is a structured society: capable of governing territory, conducting diplomacy, defending its people, and participating actively in the wider economy.</p>

<div class="cta-box">
<p class="cta-box-title">Submit a Record</p>
{% if site.recordsFormUrl %}
<p>Citizens may propose a new record for the Records archive.</p>
<a class="cta-button" href="{{ site.recordsFormUrl }}" target="_blank" rel="noopener">Open the Form</a>
{% else %}
<p class="empty-state">The submission form is being set up. Check back soon.</p>
{% endif %}
</div>

<h2>Explore</h2>

<div class="quick-links">
  <a class="quick-link" href="{{ '/records/' | url }}">
    <span class="ql-label">Archive</span>
    Records
  </a>
  <a class="quick-link" href="{{ '/announcements/' | url }}">
    <span class="ql-label">Latest</span>
    Announcements
  </a>
  <a class="quick-link" href="{{ '/governance/charter/' | url }}">
    <span class="ql-label">Founding</span>
    The Charter
  </a>
  <a class="quick-link" href="{{ '/resources/' | url }}">
    <span class="ql-label">For citizens</span>
    Covenant Resources
  </a>
  <a class="quick-link" href="{{ '/gallery/' | url }}">
    <span class="ql-label">Visual record</span>
    Gallery
  </a>
  <a class="quick-link" href="{{ '/contact/' | url }}">
    <span class="ql-label">Reach us</span>
    Contact
  </a>
</div>
