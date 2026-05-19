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
      { id: 'gorgonzola', name: 'Gorgonzola Dolce DOP', tag: 'HERITAGE BLUE', price: 38.00, category: 'Cheese', featured: true,
        img: 'assets/images/gorgonzola.jpg',
        desc: 'A young, creamy Italian blue cheese with a sweet, buttery flavour. DOP certified for authentic quality.',
        weight: '150g', origin: 'Italy',
        sku: 'DC-GD001', storage: '<4°C', pairs: 'pears/honey/walnuts',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Crafted in Lombardy and certified DOP, this Gorgonzola Dolce is matured to the youngest, sweetest stage. Its buttery, spoonable interior carries gentle blue notes that soften rather than overpower the palate.',
        serving: [
          'Spread onto warm crostini drizzled with chestnut honey.',
          'Melt into risotto in the final minute of cooking.',
          'Pair with ripe pears, walnuts, and a sweet wine.'
        ],
        servingImg: 'assets/images/gorgonzola.jpg',
        specifications: [
          { label: 'Weight', value: '150g' },
          { label: 'Origin', value: 'Italy' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'pears/honey/walnuts' },
          { label: 'Best Before', value: 'Within 3 days of opening' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Italy (DOP)' }
        ],
        reviews: [] },
      { id: 'bocconcini', name: 'Bocconcini Bucket', tag: 'FRESH', price: 14.50, category: 'Cheese', featured: true,
        img: 'assets/images/bocconcini.png',
        desc: 'Fresh, soft mozzarella balls in water. Mild, milky flavour perfect for caprese salads and pizza.',
        weight: '1kg', origin: 'Australia',
        sku: 'DC-BC001', storage: '<4°C', pairs: 'tomatoes/basil/pizza',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Made fresh daily from premium Australian cow\'s milk, our Bocconcini are hand-portioned into bite-size balls and rested in lightly salted brine. The result is a tender, milky bite with the gentle pull of true pasta filata.',
        serving: [
          'Skewer with cherry tomatoes and basil for caprese bites.',
          'Scatter over pizza in the final minutes of baking.',
          'Marinate in olive oil, lemon zest, and chilli flakes.'
        ],
        servingImg: 'assets/images/bocconcini.png',
        specifications: [
          { label: 'Weight', value: '1kg' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'tomatoes/basil/pizza' },
          { label: 'Best Before', value: 'Keep in water, 3 days' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'buffalo-mozzarella', name: 'Buffalo Mozzarella', tag: 'PREMIUM', price: 22.00, category: 'Cheese', featured: false,
        img: 'assets/images/buffalo-mozzarella.jpg',
        imgs: [
          'assets/images/buffalo-mozzarella.jpg',
          'assets/images/buffalo-mozzarella-caprese.jpg',
          'assets/images/buffalo-mozzarella-torn.jpg',
          'assets/images/buffalo-mozzarella-packaging.jpg',
          'assets/images/buffalo-mozzarella-interior.jpg'
        ],
        desc: 'Our Buffalo Mozzarella is handcrafted using traditional methods and fresh buffalo milk. It features a porcelain-white interior with a delicate, paper-thin rind, offering a rich, creamy texture and a distinctive milky sweetness.',
        weight: '1kg', origin: 'Australian',
        sku: 'DC-BM001', storage: '<4°C', pairs: 'tomatoes/basil/oil',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Crafted at our artisan creamery, this Buffalo Mozzarella follows a heritage "pasta filata" recipe. The curds are stretched by hand in hot water, resulting in the signature elastic texture and luscious, milky core that characterizes a true buffalo product.',
        serving: [
          'Slice with heirloom tomatoes and fresh basil for a classic Caprese.',
          'Serve at room temperature with a drizzle of extra virgin olive oil and sea salt.',
          'Tear over freshly baked artisanal sourdough.'
        ],
        servingImg: 'assets/images/buffalo-mozzarella-caprese.jpg',
        specifications: [
          { label: 'Weight', value: '1kg' },
          { label: 'Origin', value: 'Australian' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'tomatoes/basil/oil' },
          { label: 'Best Before', value: 'Best consumed fresh, in liquid' },
          { label: 'Allergens', value: 'Milk (buffalo)' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'parmigiano-reggiano', name: 'Parmigiano Reggiano Wedge', tag: 'AGED 24 MONTHS', price: 32.00, category: 'Cheese', featured: true,
        img: 'assets/images/parmigiano-reggiano-wedge.png',
        desc: 'Hand-cut wedge of authentic DOP Parmigiano Reggiano, aged 24 months for deep umami complexity, crystalline crunch, and a long, savoury finish.',
        weight: '250g', origin: 'Italy',
        sku: 'DC-PR001', storage: '4-8°C', pairs: 'pasta/risotto/balsamic',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Produced only within the strict DOP zones of Emilia-Romagna, this Parmigiano Reggiano is aged on wooden boards for a minimum of 24 months. Every wheel is fire-branded after passing the Consorzio inspection — your guarantee of true heritage parmesan with the unmistakable amino-acid crystals and lingering, savoury finish.',
        serving: [
          'Shave generously over fresh pasta, risotto, or carbonara.',
          'Snap into shards and serve with aged balsamic and walnut.',
          'Crumble into salads or stir into broths for a savoury lift.'
        ],
        servingImg: 'assets/images/parmigiano-reggiano-wedge.png',
        specifications: [
          { label: 'Weight', value: '250g' },
          { label: 'Origin', value: 'Italy (DOP)' },
          { label: 'Storage', value: '4-8°C' },
          { label: 'Pairs', value: 'pasta/risotto/balsamic' },
          { label: 'Aged', value: 'Min. 24 months' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'No (raw milk)' },
          { label: 'Country of Origin', value: 'Italy (Emilia-Romagna)' }
        ],
        reviews: [] },
      { id: 'cypriot-haloumi', name: 'Cypriot Haloumi', tag: 'GRILLING', price: 18.00, category: 'Cheese', featured: true,
        img: 'assets/images/cypriot-haloumi.png',
        desc: 'Brined Cypriot Haloumi made from a traditional sheep and goat\'s milk blend. Famously holds its shape under heat — perfect for grilling, frying, and the barbecue.',
        weight: '250g', origin: 'Cyprus',
        sku: 'DC-CH001', storage: '<4°C', pairs: 'lemon/mint/grilled veg',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Crafted on the island of Cyprus to a recipe unchanged for centuries, this Haloumi is folded by hand and rested in lightly salted brine. The high-melt curd squeaks against the tooth when raw and sears to a salty, golden crust the moment it hits a hot pan.',
        serving: [
          'Slice and griddle until golden, then drizzle with lemon and oregano.',
          'Skewer with capsicum and zucchini for the barbecue.',
          'Pan-fry and tuck into warm flatbreads with herbs and yogurt.'
        ],
        servingImg: 'assets/images/cypriot-haloumi.png',
        specifications: [
          { label: 'Weight', value: '250g' },
          { label: 'Origin', value: 'Cyprus' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'lemon/mint/grilled veg' },
          { label: 'Best Before', value: 'Within 7 days of opening' },
          { label: 'Allergens', value: 'Milk (sheep, goat, cow)' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Cyprus' }
        ],
        reviews: [] },
      { id: 'perfect-italiano-shredded', name: 'Perfect Italiano Shredded Mozzarella', tag: 'SHREDDED', price: 18.50, category: 'Cheese', featured: false,
        img: 'assets/images/perfect-italiano-shredded-mozzarella.png',
        desc: 'Generous 1kg pack of shredded mozzarella from Perfect Italiano. Stretchy, golden melt — the foodservice standard for pizzas and pasta bakes.',
        weight: '1kg', origin: 'Australia',
        sku: 'DC-PI001', storage: '<4°C', pairs: 'pizza/lasagne/baked pasta',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Made to a true Italian-style mozzarella spec and shredded ready for the kitchen, Perfect Italiano delivers the long, glossy stretch every pizza chef wants. A light anti-cake dusting keeps the strands separate, so the bag pours cleanly straight from the fridge.',
        serving: [
          'Top pizzas and flatbreads for the classic stretchy pull.',
          'Layer through lasagne, cannelloni, and stuffed shells.',
          'Scatter over baked pastas in the final five minutes of cooking.'
        ],
        servingImg: 'assets/images/perfect-italiano-shredded-mozzarella.png',
        specifications: [
          { label: 'Weight', value: '1kg' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'pizza/lasagne/baked pasta' },
          { label: 'Best Before', value: 'Within 7 days of opening' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'tasty-cheddar-slices', name: 'Tasty Cheddar Slices', tag: 'SLICED', price: 15.00, category: 'Cheese', featured: false,
        img: 'assets/images/tasty-cheddar-slices.png',
        desc: 'Pre-sliced Australian tasty cheddar — sharp, golden, and ready to portion. The reliable choice for sandwiches, burgers, and grazing platters.',
        weight: '500g', origin: 'Australia',
        sku: 'DC-TC001', storage: '<4°C', pairs: 'burgers/sandwiches/pickles',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Matured for a balanced sharpness and individually sliced to a consistent 20g portion, these tasty cheddar slices melt evenly under the grill while still snapping cleanly when cold. Food-grade interleaving means each slice lifts away clean from the next, straight out of the pack.',
        serving: [
          'Layer onto burgers and grill until just melted.',
          'Build into ham and pickle sandwiches for school lunches.',
          'Cube cold for cheese boards, kids\' platters, and lunch bowls.'
        ],
        servingImg: 'assets/images/tasty-cheddar-slices.png',
        specifications: [
          { label: 'Weight', value: '500g (~24 slices)' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'burgers/sandwiches/pickles' },
          { label: 'Best Before', value: 'Within 14 days of opening' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'caboolture-shredded', name: 'Caboolture Shredded', tag: 'SHREDDED', price: 12.50, category: 'Cheese', featured: false,
        img: 'assets/images/caboolture-shredded.png',
        desc: 'Pre-shredded everyday cheese sourced from the Caboolture creamery. Even strands melt fast and smoothly for pizzas, pastas, and toasted sandwiches.',
        weight: '500g', origin: 'Australia',
        sku: 'DC-CS001', storage: '<4°C', pairs: 'pizza/pasta/toasties',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Made from premium Australian cow\'s milk and shredded the same day it leaves the press, this Caboolture blend keeps a clean dairy flavour and steady melt. The strands are dusted with a touch of native starch so they stay free-flowing straight from the bag.',
        serving: [
          'Sprinkle straight onto pizza for a perfectly even melt.',
          'Stir through pasta bakes and gratins as they leave the oven.',
          'Layer into toasted sandwiches with ham and grain mustard.'
        ],
        servingImg: 'assets/images/caboolture-shredded.png',
        specifications: [
          { label: 'Weight', value: '500g' },
          { label: 'Origin', value: 'Australia (Caboolture, QLD)' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'pizza/pasta/toasties' },
          { label: 'Best Before', value: 'Within 7 days of opening' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'agropur-frozen-mozzarella', name: 'Agropur Frozen Mozzarella RW', tag: 'FROZEN BLOCK', price: 9.50, category: 'Cheese', featured: false,
        img: 'assets/images/agropur-frozen-mozzarella-rw.png',
        desc: 'Frozen mozzarella block from Agropur — a foodservice favourite. Long-life storage, even melt, and consistent cost per kilo for high-volume kitchens.',
        weight: '~2.5kg', origin: 'Canada',
        sku: 'DC-AM001', storage: '≤-18°C', pairs: 'pizza/pasta/calzone',
        aboutHeading: 'About This Cheese',
        aboutLong: 'Agropur freezes its mozzarella at peak freshness in solid Random Weight blocks, locking in the long stretch and creamy melt that pizzerias rely on. Sold by actual weight per block, it gives kitchens a clean, predictable yield once thawed and shredded fresh.',
        serving: [
          'Thaw overnight in the fridge, then shred for service-ready mozzarella.',
          'Cube into pasta bakes for that classic gooey pull.',
          'Stretch over flatbreads and grill until blistered and golden.'
        ],
        servingImg: 'assets/images/agropur-frozen-mozzarella-rw.png',
        specifications: [
          { label: 'Weight', value: '~2.5kg (Random Weight)' },
          { label: 'Origin', value: 'Canada' },
          { label: 'Storage', value: '≤-18°C (frozen)' },
          { label: 'Pairs', value: 'pizza/pasta/calzone' },
          { label: 'Process', value: 'Block-Frozen at Source' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Canada' }
        ],
        reviews: [] },
      { id: 'ricotta', name: 'Fresh Ricotta', tag: 'FRESH', price: 9.50, category: 'Cream', featured: false,
        img: 'assets/images/ricotta.jpg',
        desc: 'Light, fluffy fresh ricotta made from whey. Versatile for both sweet and savoury dishes.',
        weight: '500g', origin: 'Australia',
        sku: 'DC-FR001', storage: '<4°C', pairs: 'lasagne/honey/berries',
        aboutHeading: 'About This Cream',
        aboutLong: 'Our Fresh Ricotta is gently set from premium whey within hours of milking, then drained in cloth baskets to retain a light, fluffy curd. The natural sweetness makes it as suited to dessert as to savoury bakes.',
        serving: [
          'Whip with honey and lemon zest for a quick toast topping.',
          'Layer through lasagne or stuffed shells with herbs.',
          'Spoon onto pancakes with fresh berries and maple syrup.'
        ],
        servingImg: 'assets/images/ricotta.jpg',
        specifications: [
          { label: 'Weight', value: '500g' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'lasagne/honey/berries' },
          { label: 'Best Before', value: 'Within 5 days of opening' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'thickened-cream', name: 'Thickened Cream', tag: 'FRESH', price: 6.50, category: 'Cream', featured: false,
        img: 'assets/images/thickened-cream.jpg',
        desc: 'Rich, full-fat thickened cream perfect for whipping, cooking, and desserts.',
        weight: '600ml', origin: 'Australia',
        sku: 'DC-TC001', storage: '<4°C', pairs: 'desserts/sauces/scones',
        aboutHeading: 'About This Cream',
        aboutLong: 'Thickened gently with a touch of natural stabiliser, our 35% fat cream whips quickly and holds its shape without splitting. Equally happy in a hot pan, it carries a clean dairy sweetness that lifts both savoury and sweet dishes.',
        serving: [
          'Whip with vanilla sugar for pavlovas, trifles, and sponges.',
          'Stir into pan sauces for silky finishing richness.',
          'Pour over fresh fruit, scones, or warm puddings.'
        ],
        servingImg: 'assets/images/thickened-cream.jpg',
        specifications: [
          { label: 'Volume', value: '600ml' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'desserts/sauces/scones' },
          { label: 'Fat Content', value: 'Min. 35%' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'full-cream-milk', name: 'Full Cream Milk', tag: 'FRESH', price: 4.20, category: 'Milk & Yogurt', featured: false,
        img: 'assets/images/full-cream-milk.jpg',
        desc: 'Premium full cream milk from Australian farms. Rich, creamy taste.',
        weight: '2L', origin: 'Australia',
        sku: 'DC-FM001', storage: '<4°C', pairs: 'cereal/coffee/baking',
        aboutHeading: 'About This Milk',
        aboutLong: 'Sourced from a small group of Australian dairy farms, our full cream milk is gently pasteurised and homogenised to retain its naturally sweet, creamy flavour. No additives — just clean, fresh milk with the body of true farmhouse dairy.',
        serving: [
          'Pour cold over breakfast cereals and granola.',
          'Steam to a glossy microfoam for café-style coffee.',
          'Use in custards, béchamels, and dairy-rich baking.'
        ],
        servingImg: 'assets/images/full-cream-milk.jpg',
        specifications: [
          { label: 'Volume', value: '2L' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'cereal/coffee/baking' },
          { label: 'Fat Content', value: 'Min. 3.5%' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'greek-yogurt', name: 'Greek Style Yogurt', tag: 'STRAINED', price: 8.90, category: 'Milk & Yogurt', featured: false,
        img: 'assets/images/greek-yogurt.jpg',
        desc: 'Thick, creamy Greek-style yogurt with a tangy flavour. High in protein.',
        weight: '1kg', origin: 'Australia',
        sku: 'DC-GY001', storage: '<4°C', pairs: 'honey/granola/curries',
        aboutHeading: 'About This Yogurt',
        aboutLong: 'Strained for hours in the traditional Mediterranean style, our Greek Yogurt loses excess whey to leave a thick, velvety curd with an honest tang. Live cultures continue to develop flavour and gut-friendly benefits as it rests.',
        serving: [
          'Drizzle with honey and crushed walnuts for breakfast.',
          'Stir through curries, soups, and grain bowls to finish.',
          'Marinate chicken or lamb for tender grilled skewers.'
        ],
        servingImg: 'assets/images/greek-yogurt.jpg',
        specifications: [
          { label: 'Weight', value: '1kg' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'honey/granola/curries' },
          { label: 'Cultures', value: 'Live, active' },
          { label: 'Allergens', value: 'Milk' },
          { label: 'Pasteurised', value: 'Yes' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'plain-flour', name: 'Baker\'s Plain Flour', tag: 'ARTISAN', price: 5.50, category: 'Flour & Yeast', featured: false,
        img: 'assets/images/plain-flour.jpg',
        desc: 'Premium baker\'s plain flour milled from Australian wheat. Ideal for pastry and baking.',
        weight: '5kg', origin: 'Australia',
        sku: 'DC-PF001', storage: 'Cool, dry place', pairs: 'pastry/cakes/bread',
        aboutHeading: 'About This Flour',
        aboutLong: 'Stone-milled from selected Australian wheat, our baker\'s plain flour is sifted to a clean, even grade with steady protein content. Low impurities and consistent absorption make it a reliable workhorse across pastries, cakes, and home breads.',
        serving: [
          'Use as the base flour for cakes, biscuits, and shortcrust.',
          'Dust over fish or meat before searing for a golden crust.',
          'Whisk into cold milk for smooth roux and béchamel sauces.'
        ],
        servingImg: 'assets/images/plain-flour.jpg',
        specifications: [
          { label: 'Weight', value: '5kg' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: 'Cool, dry place' },
          { label: 'Pairs', value: 'pastry/cakes/bread' },
          { label: 'Protein', value: '~10.5%' },
          { label: 'Allergens', value: 'Wheat (Gluten)' },
          { label: 'Additives', value: 'Thiamine, Folic Acid' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] },
      { id: 'prosciutto', name: 'Prosciutto di Parma', tag: 'AGED 24 MONTHS', price: 18.50, category: 'Small Goods', featured: false,
        img: 'assets/images/prosciutto.jpg',
        desc: 'Authentic Italian prosciutto aged for 24 months. Delicate, sweet flavour with silky texture.',
        weight: '100g', origin: 'Italy',
        sku: 'DC-PP001', storage: '<4°C', pairs: 'melon/figs/grissini',
        aboutHeading: 'About This Prosciutto',
        aboutLong: 'Aged for a minimum of 24 months in the cool air of the Parma hills, this prosciutto develops a delicate, melt-in-the-mouth texture and a sweet, nutty finish. Each leg carries the official Parma crown — a guarantee of true heritage curing.',
        serving: [
          'Drape over melon, figs, or rockmelon as an antipasto.',
          'Wrap around grissini, asparagus, or fresh mozzarella.',
          'Layer onto a finished pizza after baking for a salty lift.'
        ],
        servingImg: 'assets/images/prosciutto.jpg',
        specifications: [
          { label: 'Weight', value: '100g' },
          { label: 'Origin', value: 'Italy' },
          { label: 'Storage', value: '<4°C' },
          { label: 'Pairs', value: 'melon/figs/grissini' },
          { label: 'Aged', value: 'Min. 24 months' },
          { label: 'Allergens', value: 'None declared' },
          { label: 'Ingredients', value: 'Pork leg, salt' },
          { label: 'Country of Origin', value: 'Italy (DOP, Parma)' }
        ],
        reviews: [] },
      { id: 'frozen-peas', name: 'Garden Peas Frozen', tag: 'FROZEN', price: 3.90, category: 'Frozen & Vegetables', featured: false,
        img: 'assets/images/frozen-peas.jpg',
        desc: 'Sweet garden peas, flash-frozen at peak freshness to preserve nutrients and flavour.',
        weight: '1kg', origin: 'Australia',
        sku: 'DC-FP001', storage: '≤-18°C', pairs: 'pasta/risotto/mint',
        aboutHeading: 'About These Peas',
        aboutLong: 'Picked at peak ripeness and individually quick-frozen within hours of harvest, our garden peas keep their bright colour, springy bite, and natural sweetness all year round. No blanching off-notes — just clean field flavour.',
        serving: [
          'Toss straight from the freezer into pasta, soups, and risottos.',
          'Blitz with mint and ricotta for a fresh spring purée.',
          'Steam briefly and dress with butter, sea salt, and lemon.'
        ],
        servingImg: 'assets/images/frozen-peas.jpg',
        specifications: [
          { label: 'Weight', value: '1kg' },
          { label: 'Origin', value: 'Australia' },
          { label: 'Storage', value: '≤-18°C' },
          { label: 'Pairs', value: 'pasta/risotto/mint' },
          { label: 'Process', value: 'Individually Quick-Frozen' },
          { label: 'Allergens', value: 'None declared' },
          { label: 'Ingredients', value: 'Garden peas' },
          { label: 'Country of Origin', value: 'Australia' }
        ],
        reviews: [] }
    ];


  // ===== STATE =====
  var cart = {};
  var currentPage = 'home';
  var currentProduct = null;
  var prevPage = 'search';
  var searchQuery = '';
  var activeCategory = 'All';
  var currentTab = 'description';
  var selectedDelivery = 'standard';
  var selectedPayment = 'credit';
  var currentSearchPage = 1;
  var ITEMS_PER_PAGE = 6;
  var PRICE_MIN = 0, PRICE_MAX = 50;
  var priceMin = PRICE_MIN, priceMax = PRICE_MAX;
  var filterInStock = true;
  var filterLimited = false;

  // ===== DOM HELPERS =====
  function $(id) { return document.getElementById(id); }
  function $$(sel) { return document.querySelectorAll(sel); }

  
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

   // ===== RENDER PRODUCT CARD =====
   function renderProductCard(p) {
    var qty = cart[p.id] || 0;
    var imgSrc = p.img;
    return '<div class="product-card" data-card-id="' + p.id + '" data-product="' + p.id + '">' +
      '<img class="product-card-img" src="' + imgSrc + '" alt="' + p.name + '" onerror="this.style.background=\'#d4c4b0\';this.src=\'\';">' +
      '<div class="product-card-info">' +
        '<p class="product-tag">' + p.tag + '</p>' +
        '<p class="product-name">' + p.name + '</p>' +
        '<p class="product-price">' + formatPrice(p.price) + '</p>' +
        '<button class="btn-add-cart" data-add="' + p.id + '" style="display:' + (qty > 0 ? 'none' : 'flex') + '">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="#fff" stroke-width="2"/><path d="M16 10a4 4 0 01-8 0" stroke="#fff" stroke-width="2"/></svg>' +
          'Add to Cart' +
        '</button>' +
        '<div class="card-qty-ctrl qty-pill" style="display:' + (qty > 0 ? 'flex' : 'none') + '">' +
          '<button class="cart-qty-btn" data-remove="' + p.id + '">−</button>' +
          '<span class="card-qty-num">' + qty + '</span>' +
          '<button class="cart-qty-btn" data-add="' + p.id + '">+</button>' +
        '</div>' +
      '</div>' +
    '</div>';
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
 

 


function updateAllBadges() {
  var count = getCartCount();
  var badges = $$('.cart-badge');
  badges.forEach(function(b) {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

function renderSearchSidebar() {
  var sb = $('search-sidebar');
  if (!sb) return;
  var cats = CATEGORIES.filter(function(c) { return c !== 'All'; });
  var html = '';
  html += '<div class="sidebar-section">';
  html += '<h3 class="sidebar-title">Filter by Category</h3>';
  html += '<ul class="sidebar-cat-list">';
  html += '<li><a href="#" class="sidebar-cat' + (activeCategory === 'All' ? ' active' : '') + '" data-filter="All">All Products</a></li>';
  cats.forEach(function(c) {
    html += '<li><a href="#" class="sidebar-cat' + (activeCategory === c ? ' active' : '') + '" data-filter="' + c + '">' + c + '</a></li>';
  });
  html += '</ul>';
  html += '</div>';
  html += '<div class="sidebar-section">';
  html += '<h3 class="sidebar-title">Price Range</h3>';
  html += '<div class="price-slider">';
  html += '<div class="price-track"></div>';
  html += '<div class="price-range-fill" id="price-range-fill"></div>';
  html += '<input type="range" id="price-min" class="price-input" min="' + PRICE_MIN + '" max="' + PRICE_MAX + '" step="1" value="' + priceMin + '">';
  html += '<input type="range" id="price-max" class="price-input" min="' + PRICE_MIN + '" max="' + PRICE_MAX + '" step="1" value="' + priceMax + '">';
  html += '</div>';
  html += '<div class="price-labels"><span id="price-label-min">$' + priceMin + '</span><span id="price-label-max">' + priceMaxLabel() + '</span></div>';
  html += '</div>';
  html += '<div class="sidebar-section">';
  html += '<h3 class="sidebar-title">Availability</h3>';
  html += '<div class="sidebar-check">';
  html += '<label class="check-row"><input type="checkbox" data-avail="inStock"' + (filterInStock ? ' checked' : '') + '><span class="check-box"></span><span>In Stock</span></label>';
  html += '<label class="check-row"><input type="checkbox" data-avail="limited"' + (filterLimited ? ' checked' : '') + '><span class="check-box"></span><span>Limited Edition</span></label>';
  html += '</div>';
  html += '</div>';
  sb.innerHTML = html;
  updatePriceFill();
}


function renderSearch() {
  var filtersEl = $('category-filters');
  if (filtersEl) {
    filtersEl.innerHTML = CATEGORIES.map(function(c) {
      return '<button class="cat-filter-btn' + (c === activeCategory ? ' active' : '') + '" data-filter="' + c + '">' + c + '</button>';
    }).join('');
  }
  renderSearchSidebar();
  renderSearchResults();
}

function renderSearchResults() {
  var filtered = PRODUCTS.filter(function(p) {
    var matchCat = activeCategory === 'All' || p.category === activeCategory;
    var q = searchQuery.toLowerCase();
    var matchQ = !q || p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    var matchPrice = p.price >= priceMin && (priceMax >= PRICE_MAX || p.price <= priceMax);
    var availPass;
    if (!filterInStock && !filterLimited) availPass = true;
    else if (filterInStock && filterLimited) availPass = true;
    else if (filterInStock) availPass = true;
    else availPass = isLimited(p);
    return matchCat && matchQ && matchPrice && availPass;
  });
  var countEl = $('results-count');
  if (countEl) countEl.textContent = 'Showing ' + filtered.length + ' product' + (filtered.length !== 1 ? 's' : '');
  var breadEl = $('search-breadcrumb-cat');
  if (breadEl) breadEl.textContent = activeCategory === 'All' ? 'All Products' : activeCategory;
  var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  if (currentSearchPage > totalPages) currentSearchPage = 1;
  var start = (currentSearchPage - 1) * ITEMS_PER_PAGE;
  var pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);
  var grid = $('search-results-grid');
  if (grid) grid.innerHTML = pageItems.map(renderProductCard).join('');
  var pag = $('pagination');
  if (pag) {
    if (totalPages <= 1) { pag.innerHTML = ''; return; }
    var html = '';
    for (var i = 1; i <= totalPages; i++) {
      html += '<button class="page-btn' + (i === currentSearchPage ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }
    pag.innerHTML = html;
  }
}

 // ===== RENDER PRODUCT DETAIL =====
 function renderTabBody(p, tab) {
  if (tab === 'specifications') {
    return '<div class="spec-list">' +
      p.specifications.map(function(s) {
        return '<div class="spec-row"><span class="info-label">' + s.label + '</span><span class="info-value">' + s.value + '</span></div>';
      }).join('') +
    '</div>';
  }
  if (tab === 'reviews') {
    if (!p.reviews || p.reviews.length === 0) {
      return '<div class="reviews-empty">' +
        '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c2a799" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<h3 class="reviews-empty-title">No reviews yet</h3>' +
        '<p class="reviews-empty-sub">Be the first to share your experience with ' + p.name + '.</p>' +
        '<button class="btn-write-review">Write a Review</button>' +
      '</div>';
    }
    return '<div class="reviews-list">' + p.reviews.map(function(r) {
      return '<div class="review-card"><div class="review-author">' + r.author + '</div><div class="review-stars">' + '★'.repeat(r.rating) + '</div><p class="review-body">' + r.body + '</p></div>';
    }).join('') + '</div>';
  }
  return '<div class="tab-content-row">' +
    '<div class="tab-content-text">' +
      '<h2 class="about-heading">' + p.aboutHeading + '</h2>' +
      '<p class="about-text">' + p.aboutLong + '</p>' +
      '<h3 class="serving-heading">Serving Suggestions</h3>' +
      '<ul class="serving-list">' +
        p.serving.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
      '</ul>' +
    '</div>' +
    '<div class="tab-content-img"><img src="' + p.servingImg + '" alt="' + p.name + ' serving" onerror="this.style.background=\'#f0e8e0\';this.src=\'\';"></div>' +
  '</div>';
}

function renderActionRow(p) {
  var qty = cart[p.id] || 0;
  if (qty > 0) {
    return '<div class="qty-stepper qty-stepper-solo">' +
      '<button class="qty-stepper-btn" id="qty-minus" aria-label="Decrease quantity">−</button>' +
      '<span class="qty-stepper-num" id="qty-display">' + qty + '</span>' +
      '<button class="qty-stepper-btn" id="qty-plus" aria-label="Increase quantity">+</button>' +
    '</div>';
  }
  return '<button class="btn-add-cart-large" id="btn-add-to-cart">' +
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="#fff" stroke-width="2"/><path d="M16 10a4 4 0 01-8 0" stroke="#fff" stroke-width="2"/></svg>' +
    '<span class="btn-add-cart-label">Add to Cart</span>' +
  '</button>';
}

function refreshActionRow() {
  if (!currentProduct) return;
  var row = $('product-action-row');
  if (row) row.innerHTML = renderActionRow(currentProduct);
}

function renderProduct(id) {
  var p = PRODUCTS.find(function(x) { return x.id === id; });
  if (!p) return;
  currentProduct = p;
  currentTab = 'description';
  var body = $('product-page-body');
  if (!body) return;
  var related = PRODUCTS.filter(function(x) { return x.category === p.category && x.id !== p.id; });
  if (related.length < 4) {
    var others = PRODUCTS.filter(function(x) {
      return x.id !== p.id && x.category !== p.category;
    });
    others.sort(function(a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
    related = related.concat(others).slice(0, 4);
  } else {
    related = related.slice(0, 4);
  }
  var imgs = p.imgs && p.imgs.length > 1 ? p.imgs : [p.img];
  var reviewsCount = getReviewsCount(p);

  body.innerHTML =
    '<div class="product-page-content">' +
      '<div class="product-breadcrumb"><a data-nav="home" href="#">Home</a> › <a data-nav="search" href="#">Shop</a> › <a href="#" data-cat-nav="' + p.category + '">' + p.category + '</a> › ' + p.name + '</div>' +
      '<div class="product-detail-main">' +
        '<div class="product-image-col">' +
          '<div class="product-image-wrap">' +
            '<img class="product-main-img" id="product-main-img" src="' + p.img + '" alt="' + p.name + '" onerror="this.style.background=\'#f0e8e0\';this.src=\'\';">' +
          '</div>' +
          (imgs.length > 1
            ? '<div class="product-thumbnails">' +
                imgs.map(function(src, i) {
                  return '<div class="product-thumb' + (i === 0 ? ' active' : '') + '" data-thumb-src="' + src + '">' +
                    '<img src="' + src + '" alt="' + p.name + ' ' + (i + 1) + '" onerror="this.style.background=\'#f0e8e0\';this.src=\'\';">' +
                  '</div>';
                }).join('') +
              '</div>'
            : '') +
        '</div>' +
        '<div class="product-info-col">' +
          '<span class="product-premium-tag">' + p.tag + '</span>' +
          '<h1 class="product-detail-name">' + p.name + '</h1>' +
          '<div class="product-price-row">' +
            '<span class="product-detail-price">' + formatPrice(p.price) + '</span>' +
            '<span class="product-price-divider"></span>' +
            '<span class="product-stars">' + renderStars(getReviewsAvg(p)) + '</span>' +
            '<span class="product-reviews-count">(' + reviewsCount + ' review' + (reviewsCount !== 1 ? 's' : '') + ')</span>' +
          '</div>' +
          '<div class="product-stock-row">' +
            '<span class="stock-indicator"><span class="stock-dot"></span><span class="stock-text">In Stock</span></span>' +
            '<span class="stock-divider">|</span>' +
            '<span class="product-sku">SKU: ' + p.sku + '</span>' +
          '</div>' +
          '<button class="btn-wishlist" id="btn-wishlist">' +
            '<svg width="15" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
            'Add to Wishlist' +
          '</button>' +
          '<p class="product-detail-desc">' + p.desc + '</p>' +
          '<div class="product-info-grid">' +
            '<div class="info-row"><span class="info-label">Weight</span><span class="info-value">' + p.weight + '</span></div>' +
            '<div class="info-row"><span class="info-label">Origin</span><span class="info-value">' + p.origin + '</span></div>' +
            '<div class="info-row"><span class="info-label">Storage</span><span class="info-value">' + p.storage + '</span></div>' +
            '<div class="info-row"><span class="info-label">Pairs</span><span class="info-value">' + p.pairs + '</span></div>' +
          '</div>' +
          '<div class="product-action-row" id="product-action-row">' + renderActionRow(p) + '</div>' +
          '<button class="btn-continue-shop" id="btn-continue-shop">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' +
            '<span>Continue Shopping</span>' +
          '</button>' +
          '<div class="delivery-banner">' +
            '<p class="delivery-banner-row">' +
              '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M1 1h12v10H1V1zm12 3h5l3 3v4h-8V4z" stroke="#c84e00" stroke-width="1.5" stroke-linejoin="round"/><circle cx="5" cy="13" r="2" stroke="#c84e00" stroke-width="1.5"/><circle cx="16" cy="13" r="2" stroke="#c84e00" stroke-width="1.5"/></svg>' +
              '<span>Complimentary cold-chain delivery on orders over $50</span>' +
            '</p>' +
            '<p class="delivery-banner-row">' +
              '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#c84e00" stroke-width="1.5"/><path d="M12 7v5l3 2" stroke="#c84e00" stroke-width="1.5" stroke-linecap="round"/></svg>' +
              '<span>Same-day dispatch for orders before 12 PM</span>' +
            '</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="product-tabs-section">' +
        '<div class="product-tabs">' +
          '<button class="product-tab active" data-tab="description">Description</button>' +
          '<button class="product-tab" data-tab="specifications">Specifications</button>' +
          '<button class="product-tab" data-tab="reviews">Reviews (' + reviewsCount + ')</button>' +
        '</div>' +
        '<div class="product-tab-content" id="product-tab-content">' + renderTabBody(p, 'description') + '</div>' +
      '</div>' +
      '<div class="related-section">' +
        '<h2 class="related-title">You may also like</h2>' +
        '<div class="related-grid">' + related.map(renderProductCard).join('') + '</div>' +
      '</div>' +
    '</div>';
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


