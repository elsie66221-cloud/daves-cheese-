function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    window.location.hash = page;
  }
  
  window.addEventListener('hashchange', function () {
    var page = window.location.hash.slice(1) || 'home';
    navigateTo(page);
  });
  
  navigateTo(window.location.hash.slice(1) || 'home');