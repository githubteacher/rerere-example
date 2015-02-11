(function() {
  document.addEventListener('DOMContentLoaded', initPlayground);

  function initPlayground() {
    var is = document.querySelector('*[hreflang]');
    is.forEach(function(i) {
      var html = ' <span class="langInfo">(' + i.getAttribute('hreflang') + ')</span>';
      i.insertAdjacentHTML('beforeend', html);
    });
  }
})();
