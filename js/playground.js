(function() {
  document.addEventListener('DOMContentLoaded', initPlayground);

  function initPlayground() {
    decorateRefLangs();
    // Add further init functions here
  }

  function decorateRefLangs() {
    var list = document.querySelector('*[hreflang]');
    list = Array.prototype.slice.call(items);
    list.forEach(function(item) {
      var html = ' <span class="langInfo">(' + item.getAttribute('hreflang') + ')</span>';
      item.insertAdjacentHTML('beforeend', html);
    });
  }
})();
