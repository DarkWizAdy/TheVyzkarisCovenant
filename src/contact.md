---
title: Contact
description: Reach the Vyzkaris Covenant.
layout: layouts/base.njk
---

<p class="page-eyebrow">Reach Us</p>
<h1 class="page-title">Contact</h1>
<p>Send a message and it will reach the Covenant directly.</p>

<form class="contact-form" action="https://formspree.io/f/xjyvjkbg" method="POST">
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="_replyto" required>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="6" required></textarea>
  </div>
  <button type="submit">Send</button>
</form>
