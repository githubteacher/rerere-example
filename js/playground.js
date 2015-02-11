(function() {
  document.addEventListener('DOMContentLoaded', initPlayground);

  function initPlayground() {
    var items = document.querySelector('*[hreflang]');
    items.forEach(function(item) {
      var html = ' <span class="langInfo">(' + item.getAttribute('hreflang') + ')</span>';
      item.insertAdjacentHTML('beforeend', html);
    });
  }
})();
