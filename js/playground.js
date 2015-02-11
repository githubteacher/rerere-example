document.addEventListener('DOMContentLoaded', initPlayground);

function initPlayground() {
  is = document.querySelector('*[hreflang]');
  is.forEach(function(i) {
    html = ' <span class="langInfo">(' + i.getAttribute('hreflang') + ')</span>';
    i.insertAdjacentHTML('beforeend', html);
  });
}
