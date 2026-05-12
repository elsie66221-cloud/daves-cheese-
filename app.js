(function () {
    // ===== DATA =====
    var CATEGORIES = ['All', 'Cheese', 'Cream', 'Milk & Yogurt', 'Flour & Yeast', 'Small Goods', 'Frozen & Vegetables'];

    var PRODUCTS = [
        { id: 'grana-padano', name: 'Zanetti Grana Padano', tag: 'AGED 18 MONTHS', price: 28.00, category: 'Cheese', featured: true,
          img: 'assets/images/grana-padano.jpg',
          desc: 'A classic Italian hard cheese aged for 18 months. Rich, nutty flavour with a granular texture. Perfect for grating over pasta or enjoying with wine.',
          weight: '200g', origin: 'Italy',
          sku: 'DC-GP001', storage: '4-8°C', pairs: 'pasta/risotto/red wine',
          aboutHeading: 'About This Cheese',
          aboutLong: 'Aged for a minimum of 18 months in our climate-controlled cellars, this Zanetti Grana Padano develops the deep umami complexity and crystalline crunch that define great Italian hard cheeses. Each wheel is hand-tested before release.',
          serving: [
            'Grate generously over hot pasta or risotto for a classic finish.',
            'Shave thin curls onto rocket and pear salads.',
            'Serve at room temperature with a glass of dry red wine.'
          ],
          servingImg: 'assets/images/grana-padano.jpg',
          specifications: [
            { label: 'Weight', value: '200g' },
            { label: 'Origin', value: 'Italy' },
            { label: 'Storage', value: '4-8°C' },
            { label: 'Pairs', value: 'pasta/risotto/red wine' },
            { label: 'Best Before', value: 'Within 5 days of opening' },
            { label: 'Allergens', value: 'Milk, Egg (lysozyme)' },
            { label: 'Pasteurised', value: 'Yes' },
            { label: 'Country of Origin', value: 'Italy' }
          ],
          reviews: [] },
        { id: 'danish-fetta', name: 'Danish Fetta', tag: 'CRUMBLED', price: 34.00, category: 'Cheese', featured: true,
          img: 'assets/images/danish-fetta.jpg',
          desc: 'Creamy, crumbly Danish-style fetta with a mild, slightly tangy flavour. Ideal for salads, pastries, and Mediterranean dishes.',
          weight: '400g', origin: 'Denmark',
          sku: 'DC-DF001', storage: '<4°C', pairs: 'salads/pastries/herbs',
          aboutHeading: 'About This Cheese',
          aboutLong: 'Our Danish Fetta is brined slowly in oak barrels using a heritage Scandinavian method, producing a crumbly yet creamy texture with a clean, slightly tangy finish that holds beautifully against bold flavours.',
          serving: [
            'Crumble through Greek-style salads with cucumber and olives.',
            'Bake into spinach pies, pastries, and stuffed peppers.',
            'Toss into cold pasta salads with sun-dried tomatoes.'
          ],
          servingImg: 'assets/images/danish-fetta.jpg',
          specifications: [
            { label: 'Weight', value: '400g' },
            { label: 'Origin', value: 'Denmark' },
            { label: 'Storage', value: '<4°C' },
            { label: 'Pairs', value: 'salads/pastries/herbs' },
            { label: 'Best Before', value: 'Store in brine, 14 days' },
            { label: 'Allergens', value: 'Milk' },
            { label: 'Pasteurised', value: 'Yes' },
            { label: 'Country of Origin', value: 'Denmark' }
          ],
          reviews: [] },

// ===== NAVIGATION =====
function navigateTo(page) {
    $$('.page').forEach(function(p) { p.classList.remove('active'); });
    var el = $('page-' + page);
    if (el) { el.classList.add('active'); el.scrollTop = 0; window.scrollTo(0, 0); }
    currentPage = page;
    window.location.hash = page;
    if (page === 'home') renderHome();
    if (page === 'search') renderSearch();
    if (page === 'cart') renderCart();
    if (page === 'payment') renderPayment();
    if (page === 'confirm') renderConfirm();
    updateAllBadges();
  }

   // ===== RENDER HOME =====
   function renderHome() {
    var featuredMobile = $('featured-grid-mobile');
    var featuredDesktop = $('featured-grid-desktop');
    var catMobile = $('category-grid-mobile');
    var catDesktop = $('category-grid-desktop');
    var featured = PRODUCTS.filter(function(p) { return p.featured; }).slice(0, 4);
    if (featuredMobile) featuredMobile.innerHTML = featured.map(renderProductCard).join('');
    if (featuredDesktop) featuredDesktop.innerHTML = featured.map(renderProductCard).join('');
    var cats = CATEGORIES.filter(function(c) { return c !== 'All'; });
    var catImgs = { 'Cheese': 'assets/images/cat-cheese.jpg', 'Cream': 'assets/images/cat-cream.jpg', 'Milk & Yogurt': 'assets/images/cat-milk.jpg', 'Flour & Yeast': 'assets/images/cat-flour.jpg', 'Small Goods': 'assets/images/cat-smallgoods.jpg', 'Frozen & Vegetables': 'assets/images/cat-frozen.jpg' };
    var catHtml = cats.map(function(c) {
      return '<div class="category-card" data-cat-nav="' + c + '">' +
        '<img class="category-card-img" src="' + (catImgs[c] || '') + '" alt="' + c + '" onerror="this.style.background=\'#8b7355\';this.src=\'\';">' +
        '<div class="category-card-gradient"></div>' +
        '<div class="category-card-content">' +
          '<p class="category-card-title">' + c + '</p>' +
          '<p class="category-browse">BROWSE NOW ›</p>' +
        '</div>' +
      '</div>';
    }).join('');
    if (catMobile) catMobile.innerHTML = catHtml;
    if (catDesktop) catDesktop.innerHTML = catHtml;
  }
 // ===== INIT =====
 function init() {
    renderHome();
    var hash = window.location.hash.slice(1) || 'home';
    var validPages = ['home', 'search', 'product', 'cart', 'payment', 'confirm'];
    if (!validPages.includes(hash)) hash = 'home';
    navigateTo(hash);
  }

  window.addEventListener('hashchange', function() {
    var hash = window.location.hash.slice(1) || 'home';
    if (hash !== currentPage) navigateTo(hash);
  });

  init();
})();


