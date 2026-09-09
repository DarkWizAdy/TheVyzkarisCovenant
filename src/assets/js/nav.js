(function () {
  var toggle = document.getElementById('nav-toggle');
  var list = document.getElementById('nav-list');

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('.nav-list li.has-children > .nav-label').forEach(function (label) {
    label.addEventListener('click', function () {
      label.parentElement.classList.toggle('open');
    });
  });
})();
