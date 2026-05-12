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
 
// ===== EVENT DELEGATION =====
document.addEventListener('click', function(e) {
  var t = e.target;

  // Nav buttons
  var navBtn = t.closest('[data-nav]');
  if (navBtn) { e.preventDefault(); navigateTo(navBtn.dataset.nav); return; }

  // Category nav from home
  var catNav = t.closest('[data-cat-nav]');
  if (catNav) { activeCategory = catNav.dataset.catNav; currentSearchPage = 1; navigateTo('search'); return; }

  // Add to cart (product cards)
  var addBtn = t.closest('[data-add]');
  if (addBtn && !addBtn.closest('[data-cart-add]')) { addToCart(addBtn.dataset.add); return; }

  // Remove from cart (product cards)
  var removeBtn = t.closest('[data-remove]');
  if (removeBtn) { removeFromCart(removeBtn.dataset.remove); return; }

  // Cart page add
  var cartAdd = t.closest('[data-cart-add]');
  if (cartAdd) { addToCart(cartAdd.dataset.cartAdd); renderCart(); return; }

  // Cart page remove
  var cartRemove = t.closest('[data-cart-remove]');
  if (cartRemove) { removeFromCart(cartRemove.dataset.cartRemove); renderCart(); return; }

  // Cart page delete
  var cartDelete = t.closest('[data-cart-delete]');
  if (cartDelete) { delete cart[cartDelete.dataset.cartDelete]; updateAllBadges(); renderCart(); return; }

  // Product card click (navigate to product)
  var productCard = t.closest('[data-product]');
  if (productCard && !t.closest('[data-add]') && !t.closest('[data-remove]') && !t.closest('.card-qty-ctrl')) {
    prevPage = currentPage;
    renderProduct(productCard.dataset.product);
    navigateTo('product');
    return;
  }

  // Product back button
  if (t.closest('#product-back-btn')) { navigateTo(prevPage === 'product' ? 'search' : prevPage); return; }

  // Continue shopping (product detail) — go back to wherever the user came from
  if (t.id === 'btn-continue-shop' || t.closest('#btn-continue-shop')) {
    navigateTo(prevPage === 'product' || !prevPage ? 'search' : prevPage);
    return;
  }

  // Product qty stepper (detail page) — directly modifies cart[id]
  if (t.id === 'qty-minus') {
    if (!currentProduct) return;
    var cur = cart[currentProduct.id] || 0;
    if (cur <= 1) {
      delete cart[currentProduct.id];
      refreshActionRow();
    } else {
      cart[currentProduct.id] = cur - 1;
      var dMinus = $('qty-display');
      if (dMinus) dMinus.textContent = cart[currentProduct.id];
    }
    updateCardControls(currentProduct.id);
    updateAllBadges();
    return;
  }
  if (t.id === 'qty-plus') {
    if (!currentProduct) return;
    cart[currentProduct.id] = (cart[currentProduct.id] || 0) + 1;
    var dPlus = $('qty-display');
    if (dPlus) dPlus.textContent = cart[currentProduct.id];
    updateCardControls(currentProduct.id);
    updateAllBadges();
    return;
  }

  // Product add to cart (detail page) — sets cart[id]=1 and swaps to stepper
  if (t.id === 'btn-add-to-cart' || t.closest('#btn-add-to-cart')) {
    if (!currentProduct) return;
    if (!cart[currentProduct.id]) cart[currentProduct.id] = 1;
    refreshActionRow();
    updateCardControls(currentProduct.id);
    updateAllBadges();
    return;
  }

  // Wishlist toggle
  if (t.id === 'btn-wishlist' || t.closest('#btn-wishlist')) {
    var w = t.closest('#btn-wishlist') || t;
    w.classList.toggle('active');
    return;
  }

  // Product image thumbnails
  var thumbEl = t.closest('[data-thumb-src]');
  if (thumbEl) {
    var mainImg = $('product-main-img');
    if (mainImg) mainImg.src = thumbEl.dataset.thumbSrc;
    $$('.product-thumb').forEach(function(th) { th.classList.remove('active'); });
    thumbEl.classList.add('active');
    return;
  }

  // Product tabs
  var tabBtn = t.closest('[data-tab]');
  if (tabBtn) {
    currentTab = tabBtn.dataset.tab;
    $$('.product-tab').forEach(function(b) { b.classList.toggle('active', b.dataset.tab === currentTab); });
    var content = $('product-tab-content');
    if (content && currentProduct) content.innerHTML = renderTabBody(currentProduct, currentTab);
    return;
  }

  // Category filter (search page) — works for both mobile pills and desktop sidebar
  var filterBtn = t.closest('[data-filter]');
  if (filterBtn) {
    e.preventDefault();
    activeCategory = filterBtn.dataset.filter;
    currentSearchPage = 1;
    $$('.cat-filter-btn').forEach(function(b) { b.classList.toggle('active', b.dataset.filter === activeCategory); });
    $$('.sidebar-cat').forEach(function(b) { b.classList.toggle('active', b.dataset.filter === activeCategory); });
    var breadEl2 = $('search-breadcrumb-cat');
    if (breadEl2) breadEl2.textContent = activeCategory === 'All' ? 'All Products' : activeCategory;
    renderSearchResults();
    return;
  }

  // Pagination
  var pageBtn = t.closest('[data-page]');
  if (pageBtn) { currentSearchPage = parseInt(pageBtn.dataset.page); renderSearchResults(); return; }

  // Place order
  if (t.id === 'btn-place-order' || t.closest('#btn-place-order')) {
    navigateTo('confirm');
    cart = {};
    updateAllBadges();
    return;
  }

  // Delivery option
  var delivOpt = t.closest('.delivery-option');
  if (delivOpt) {
    var radio = delivOpt.querySelector('input[type=radio]');
    if (radio) {
      selectedDelivery = radio.value;
      $$('.delivery-option').forEach(function(o) { o.classList.remove('selected'); });
      delivOpt.classList.add('selected');
      var sb = $('payment-sidebar');
      if (sb) sb.innerHTML = buildPaymentSidebarBody();
    }
    return;
  }

  // Payment option
  var payOpt = t.closest('.payment-option');
  if (payOpt) {
    var radio2 = payOpt.querySelector('input[type=radio]');
    if (radio2) {
      selectedPayment = radio2.value;
      $$('.payment-option').forEach(function(o) { o.classList.remove('selected'); });
      payOpt.classList.add('selected');
      var cardSec = $('card-details-section');
      if (cardSec) cardSec.style.display = selectedPayment === 'credit' ? 'block' : 'none';
    }
    return;
  }

  // Mobile menu
  if (t.id === 'mobile-menu-btn' || t.closest('#mobile-menu-btn')) { $('mobile-menu-overlay').classList.add('open'); return; }
  if (t.id === 'mobile-menu-close' || t.closest('#mobile-menu-close')) { $('mobile-menu-overlay').classList.remove('open'); return; }
  if (t.id === 'mobile-menu-overlay') { $('mobile-menu-overlay').classList.remove('open'); return; }
});

// Search input + price sliders
document.addEventListener('input', function(e) {
  if (e.target.id === 'search-input') {
    searchQuery = e.target.value;
    currentSearchPage = 1;
    renderSearchResults();
    return;
  }
  if (e.target.id === 'card-number') {
    var v = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
    return;
  }
  if (e.target.id === 'card-expiry') {
    var v2 = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (v2.length >= 3) v2 = v2.slice(0, 2) + '/' + v2.slice(2);
    e.target.value = v2;
    return;
  }
  if (e.target.id === 'card-cvv') {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
    return;
  }
  if (e.target.id === 'price-min' || e.target.id === 'price-max') {
    var lo = parseInt($('price-min') && $('price-min').value, 10);
    var hi = parseInt($('price-max') && $('price-max').value, 10);
    if (isNaN(lo)) lo = PRICE_MIN;
    if (isNaN(hi)) hi = PRICE_MAX;
    // Keep the two handles ordered
    if (lo > hi) {
      if (e.target.id === 'price-min') lo = hi;
      else hi = lo;
      if ($('price-min')) $('price-min').value = lo;
      if ($('price-max')) $('price-max').value = hi;
    }
    priceMin = lo;
    priceMax = hi;
    updatePriceFill();
    currentSearchPage = 1;
    renderSearchResults();
    return;
  }
});

// Availability checkboxes
document.addEventListener('change', function(e) {
  var avail = e.target.closest('[data-avail]');
  if (avail) {
    var key = avail.dataset.avail;
    if (key === 'inStock') filterInStock = avail.checked;
    else if (key === 'limited') filterLimited = avail.checked;
    currentSearchPage = 1;
    renderSearchResults();
  }
});

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


