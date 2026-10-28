// All product data for the Cocoa Aroma Bakery Menu
// Synchronized with official Cocoa Aroma bakery menu cards

function makeCake(id, name, smallPrice, largePrice, description = '', img = '', pastryPrice = null) {
  const small = Number(smallPrice) || Math.round((Number(largePrice) || 1000) * 0.55);
  const large = Number(largePrice) || Math.round((Number(smallPrice) || 600) * 1.8);

  return {
    id,
    name,
    isCake: true,
    price: small,
    smallPrice: small,
    largePrice: large,
    pastryPrice: pastryPrice ? Number(pastryPrice) : null,
    description: description || name,
    image: img || '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  };
}

function makeItem(id, name, price, description = '', img = '', extra = {}) {
  return {
    id,
    name,
    isCake: false,
    price: Number(price) || 0,
    description: description || name,
    image: img || '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
    ...extra,
  };
}

// 1. Regular Cakes and Pastries (Menu Page 1)
const allRegularCakes = [
  makeCake('black-forest', 'Black Forest', 525, 930, 'Classic chocolate sponge layered with whipped cream and cherries', '/images/cakes/black-forest/1.png', 80),
  makeCake('almond-chocolate', 'Almond Chocolate', 600, 1050, 'Rich cocoa sponge with roasted almonds and chocolate ganache', '/images/cakes/almond-chocolate/1.png', 95),
  makeCake('cappuccino-chocolate', 'Cappuccino Chocolate', 600, 1050, 'Espresso-infused sponge with velvety chocolate truffle', '/images/cakes/cappuccino-chocolate/1.png', 95),
  makeCake('chocochips', 'Chocochips', 530, 950, 'Moist chocolate cake layered with crunchy chocolate chips', '', 75),
  makeCake('choco-vanilla', 'Choco Vanilla', 450, 880, 'Harmonious blend of light vanilla and rich chocolate ganache', '/images/cakes/choco-vanilla/1.png', 80),
  makeCake('chocolate-loaded', 'Chocolate Loaded', 600, 1050, 'Decadent cake overloaded with chocolate ganache and curls', '/images/cakes/chocolate-loaded/1.png', 95),
  makeCake('chocolate-loaded-butter-cream', 'Chocolate Loaded Butter Cream', 560, 970, 'Old-fashioned chocolate cake finished with whipped buttercream', '/images/cakes/chocolate-loaded-butter-cream/1.png', 85),
  makeCake('fresh-fruit', 'Fresh Fruit', 700, 1200, 'Tender vanilla sponge loaded with fresh seasonal fruits', '', 100),
  makeCake('tiramisu', 'Tiramisu', 650, 1100, 'Italian-inspired coffee-soaked sponge with mascarpone cream', '/images/cakes/tiramisu/1.png', 100),
  makeCake('mango-super-king', 'Mango Super King', 450, 800, 'Tropical Alphonso mango coulis layered with light cream', '/images/cakes/mango-super-king/1.png', 80),
  makeCake('pineapple', 'Pineapple', 420, 800, 'Refreshing vanilla sponge soaked in juicy pineapple nectar', '/images/cakes/pineapple/1.png', 70),
  makeCake('butterscotch', 'Butterscotch', 450, 850, 'Golden caramel layers paired with crunchy butterscotch praline', '/images/cakes/butterscotch/1.png', 80),
  makeCake('butterscotch-chocolate', 'Butterscotch Chocolate', 450, 800, 'Rich chocolate sponge paired with crunchy butterscotch nuts', '/images/cakes/butterscotch-chocolate/1.png', null),
  makeCake('strawberry', 'Strawberry', 420, 800, 'Delicate vanilla sponge layered with fragrant strawberry compote', '/images/cakes/strawberry/1.png', 70),
  makeCake('strawberry-chocolate', 'Strawberry Chocolate', 550, 1000, 'Chocolate sponge layered with sweet strawberry cream', '', 75),

  makeCake('white-chocolate', 'White Chocolate', 550, 1000, 'Delicate vanilla sponge enveloped in silky white chocolate ganache', '/images/cakes/white-chocolate/1.png', 85),
  makeCake('white-forest', 'White Forest', 500, 950, 'Vanilla sponge layered with juicy cherries and white chocolate curls', '/images/cakes/white-forest/1.png', 80),
  makeCake('kiwi-delight', 'Kiwi Delight', 450, 800, 'Tangy tropical kiwi compote layered into soft vanilla sponge', '/images/cakes/kiwi-delight/1.png', null)
];

// 2. Unique Cakes and Pastries (Menu Page 1)
const allUniqueCakes = [
  makeCake('royale-truffle', 'Royal Truffle', 650, 1050, 'Velvety truffle cream layered between rich chocolate sponge', '/images/cakes/royale-truffle/1.png', 99),
  makeCake('belgium-chocolate', 'Belgium Chocolate', 600, 1150, 'Intensely rich cake crafted with pure Belgian cocoa', '/images/cakes/belgium-chocolate/1.png', 110),
  makeCake('cocoaroma-spl-cake', 'Cocoaroma Spl Cake', 600, 1200, 'Our chef signature chocolate creation with secret recipe cream', '', 110),
  makeCake('dry-fruit-vanilla', 'Dry Fruit Vanilla', 700, 1250, 'Vanilla sponge loaded with roasted almonds, cashews and pistachios', '', null),
  makeCake('ferrero-rocher', 'Ferrero Rocher', 600, 1100, 'Hazelnut praline wafer crunch with rich cocoa mousse', '/images/cakes/ferrero-rocher/1.png', 110),
  makeCake('rabdi-pista-almond', 'Rabdi Pista Almond', 630, 1150, 'Rich sponge infused with slow-simmered rabdi and pistachios', '/images/cakes/rabdi-pista-almond/1.png', 99),
  makeCake('rainbow', 'Rainbow', 650, 1200, 'Vibrant multi-colored sponge layers frosted with sweet vanilla cream', '', 99),
  makeCake('rasgulla', 'Rasgulla', 600, 1100, 'Sweet Indian rasgulla dumplings nestled in delicate bakery cream', '', 120),
  makeCake('rasmalai', 'Rasmalai', 700, 1300, 'Royal saffron-cardamom rasmalai milk soaked into tender sponge', '/images/cakes/rasmalai/1.png', 120),
  makeCake('red-velvet', 'Red Velvet', 550, 1030, 'Crimson cocoa-buttermilk sponge with smooth cream cheese frosting', '/images/cakes/red-velvet/1.png', 99)
];

// 3. Kids Cakes (Menu Page 1 - Large 1 kg)
const allKidsCakes = [
  makeCake('kids-theme-1', 'Kids Theme 1 (Angry Bird)', 700, 1300, 'Exciting Angry Birds themed celebration cake', ''),
  makeCake('kids-theme-2', 'Kids Theme 2 (Funny)', 700, 1300, 'Playful cartoon character celebration cake', ''),
  makeCake('kids-theme-3', 'Kids Theme 3 (Pooh)', 700, 1300, 'Adorable Winnie the Pooh celebration cake', ''),
  makeCake('kids-theme-4', 'Kids Theme 4 (Barbie)', 700, 1300, 'Glamorous Barbie doll dress themed celebration cake', ''),
  makeCake('kids-theme-5', 'Kids Theme 5 (Car)', 700, 1300, 'Thrilling race car themed birthday cake', ''),
  makeCake('kids-theme-6', 'Kids Theme 6 (Bob Of Minions)', 700, 1300, 'Cheery Bob the Minion themed celebration cake', ''),
  makeCake('kids-theme-7', 'Kids Theme 7 (Stan Lee Spiderman)', 800, 1500, 'Superhero Spiderman themed grand celebration cake', '')
];

// 4. Love Cakes (Heart Shaped) (Menu Page 1 - Small 1/2 kg: 699, Large: 1200)
const allLoveCakes = [
  makeCake('beloved', 'Beloved', 699, 1200, 'Heart shaped pink cream cake with delicate white chocolate roses', '/images/cakes/beloved/1.png'),
  makeCake('sweet-heart', 'Sweet Heart', 699, 1200, 'Romantic heart-shaped cake layered with velvety red velvet sponge', '/images/cakes/sweet-heart/1.png'),
  makeCake('love-crush', 'Love Crush', 699, 1200, 'Heart shaped chocolate cake adorned with red cocoa glaze', ''),
  makeCake('french-hearts', 'French Hearts', 699, 1200, 'Heart shaped cake with delicate French vanilla and chocolate', ''),
  makeCake('love', 'Love', 699, 1200, 'Artisan heart shaped cake baked specially for romantic celebrations', '')
];

// 5. Corporate Cakes (Menu Page 1 - Large 1 kg)
const allCorporateCakes = [
  makeCake('choco-praline', 'Choco Praline', 650, 1200, 'Sophisticated chocolate ganache embedded with caramelized almond praline', '/images/cakes/choco-praline/1.png'),
  makeCake('chocolate-nutty', 'Chocolate Nutty', 650, 1200, 'Rich chocolate sponge packed with assorted roasted nuts', ''),
  makeCake('death-by-chocolate', 'Death By Chocolate', 650, 1200, 'Triple layer chocolate overload for grand office milestones', ''),
  makeCake('frosted', 'Frosted', 650, 1200, 'Elegantly frosted professional celebration cake', ''),
  makeCake('loaded-rocher', 'Loaded Rocher', 650, 1200, 'Grand corporate cake loaded with hazelnut Ferrero Rocher truffles', '/images/cakes/loaded-rocher/1.png')
];

// 6. Cheesecakes (Menu Page 1 - Small: 850, Large: 1400)
const allCheesecakes = [
  makeCake('blueberry-cheesecake', 'Blueberry Cheesecake', 850, 1400, 'Velvety New York cheesecake topped with wild blueberry compote', '/images/Cheese Cakes/Blue Berry Cheese Cake/Blue Berry Cheese Cake.png', 170),
  { ...makeCake('biscoff-cheesecake', 'Biscoff Cheesecake', 850, 1400, 'Creamy cheesecake infused with spiced Lotus Biscoff cookie butter', '/images/Cheese Cakes/Biscoff Cheese Cake/Biscoff Cheese Cake.png', 170), imageScale: 1.2 },
  makeCake('red-velvet-cheesecake', 'Red Velvet Cheesecake', 850, 1400, 'New York cheesecake swirled over tender red velvet sponge', '/images/Cheese Cakes/Red Velvet Cheese Cake/Red Velvet Cheese Cake.png', 170),
  { ...makeCake('nutella-cheesecake', 'Nutella Cheesecake', 850, 1400, 'Ultra-creamy cheesecake loaded with rich hazelnut Nutella', '/images/Cheese Cakes/Nutella Cheese Cake/Nutella Cheese Cake.png', 170), imageScale: 1.2 }
];

// 7. Gifting Cakes - 600 gm (Menu Page 1 - 800)
const allGiftingCakes = [
  makeItem('forever-1', 'Forever 1', 800, 'Elegant 600 gm celebratory gifting cake', '', { weight: '600 gm' }),
  makeItem('forever-2', 'Forever 2', 800, 'Handcrafted 600 gm anniversary gifting cake', '', { weight: '600 gm' }),
  makeItem('forever-3', 'Forever 3', 800, 'Artisan 600 gm chocolate gifting cake', '', { weight: '600 gm' }),
  makeItem('forever-4', 'Forever 4', 800, 'Gourmet 600 gm celebration gift cake', '', { weight: '600 gm' }),
  makeItem('forever-5', 'Forever 5', 800, 'Signature 600 gm luxury gifting cake', '', { weight: '600 gm' })
];

// 8. Brownies (Menu Page 1)
const allBrownies = [
  makeItem('choco-chip-brownie', 'Choco Chip Brownie', 80, 'Dense fudgy chocolate brownie with chocolate chips', '/images/Brownies/ChocoChip Brownie/ChocoChip Brownie.png', { portion: '1 Piece' }),
  makeItem('walnut-brownie', 'Walnut Brownie', 80, 'Rich chocolate brownie packed with toasted walnuts', '/images/Brownies/Walnut Brownie/Walnut Brownie.png', { portion: '1 Piece' }),
  makeItem('nutella-brownie', 'Nutella Brownie', 100, 'Decadent brownie generously topped with hazelnut Nutella', '/images/Brownies/Nutella Brownie/Nutella Brownie.png', { portion: '1 Piece' })
];

// 9. Cupcakes (Menu Page 1)
const allCupcakes = [
  makeItem('belgium-cupcake', 'Belgium Cupcake', 65, 'Rich Belgian chocolate cupcake with swirl frosting', '/images/Cupcakes/Belgium Cupcake/Belgium Cupcake.png', { portion: '1 Piece' }),
  makeItem('blueberry-cupcake', 'Blueberry Cupcake', 65, 'Vanilla cupcake with real blueberry buttercream', '/images/Cupcakes/BlueBerry Cupcake/BlueBerry Cupcake.png', { portion: '1 Piece' }),
  makeItem('hazelnut-truffle', 'Hazelnut Truffle', 65, 'Nutty hazelnut truffle frosted cupcake', '/images/Cupcakes/Hazelnut Cupcake/Hazelnut Cupcake.png', { portion: '1 Piece' }),
  makeItem('red-velvet-cupcake', 'Red Velvet Cupcake', 75, 'Classic red velvet frosted cupcake with cream cheese', '/images/Cupcakes/RedVelvet Cupcake/RedVelvet Cupcake.png', { portion: '1 Piece' }),
  makeItem('vanilla-cream-frosting', 'Vanilla Cream Frosting', 65, 'Vanilla cupcake with silky whipped frosting', '/images/Cupcakes/VanillaFrosting Cupcake/VanillaFrosting Cupcake.png', { portion: '1 Piece' })
];

// 10. Savouries (Menu Page 2)
const allSavouries = [
  makeItem('veg-patties', 'Veg Patties', 35, 'Crispy golden flaky patty with spiced potato and vegetables', '', { portion: '1 Piece' }),
  makeItem('paneer-patties', 'Paneer Patties', 40, 'Crispy flaky puff stuffed with spiced cottage cheese', '', { portion: '1 Piece' }),
  makeItem('mushroom-patties', 'Mushroom Patties', 40, 'Golden puff stuffed with seasoned mushrooms and herbs', '', { portion: '1 Piece' }),
  makeItem('paneer-chilli-roll', 'Paneer Chilli Roll', 35, 'Spicy Indo-Chinese paneer filling rolled in flaky pastry', '', { portion: '1 Piece' }),
  makeItem('palak-paneer-roll', 'Palak Paneer Roll', 35, 'Nutritious spinach and paneer baked roll', '', { portion: '1 Piece' }),
  makeItem('paneer-kulcha-roll', 'Paneer Kulcha Roll', 35, 'Oven-baked kulcha stuffed with spiced cottage cheese', '', { portion: '1 Piece' }),
  makeItem('baby-pizza', 'Baby Pizza', 75, 'Personal mini pizza topped with cheese and fresh vegetables', '', { portion: '1 Piece' }),
  makeItem('white-bread-vegetable-sandwich', 'White Bread Vegetable Sandwich', 50, 'Fresh vegetable sandwich on soft white bread', '', { portion: '1 Piece' }),
  makeItem('brown-bread-vegetable-sandwich', 'Brown Bread Vegetable Sandwich', 50, 'Wholesome vegetable sandwich on whole wheat brown bread', '', { portion: '1 Piece' }),
  makeItem('double-cheese-garlic-bread', 'Double Cheese Garlic Bread', 65, 'Toasted artisan garlic bread loaded with double mozzarella', '', { portion: '1 Piece' }),
  makeItem('cream-bun', 'Cream Bun', 25, 'Soft bakery bun filled with sweet vanilla cream', '', { portion: '1 Piece' }),
  makeItem('dilpasand', 'Dilpasand', 25, 'Traditional puff stuffed with sweet coconut and tutti-frutti', '', { portion: '1 Piece' }),
  makeItem('dilkhush', 'Dilkhush', 30, 'Delightful spiced sweet coconut bakery pastry', '', { portion: '1 Piece' })
];

// 11. Desserts (Menu Page 2)
const allDesserts = [
  makeItem('chocolate-lava', 'Chocolate Lava', 75, 'Warm chocolate cake with a molten truffle center', '', { portion: '1 Cup' }),
  makeItem('dark-mousse', 'Dark Mousse', 90, 'Silky dark chocolate mousse cup', '/images/Desserts/dark mousse/dark mousse.png', { portion: '1 Cup' }),
  makeItem('kitkat-mousse', 'Kitkat Mousse', 90, 'Creamy mousse layered with crunchy KitKat chunks', '/images/Desserts/kitkat mousse/kitkat mousse.png', { portion: '1 Cup' }),
  makeItem('trio-mousse', 'Trio Mousse', 90, 'Three delicate layers of white, milk and dark chocolate mousse', '/images/Desserts/trio mousse/trio mousse.png', { portion: '1 Cup' })
];

// 12. Pastries (Single-serve slices from Menu Page 1)
const allPastries = [
  makeItem('black-forest-pastry', 'Black Forest Pastry', 80, 'Single slice of classic Black Forest cake', '/images/Pastries/Black Forest Pastry/Black Forest Pastry.png', { portion: '1 Slice' }),
  makeItem('almond-chocolate-pastry', 'Almond Chocolate Pastry', 95, 'Single slice of Almond Chocolate cake', '', { portion: '1 Slice' }),
  makeItem('cappuccino-chocolate-pastry', 'Cappuccino Chocolate Pastry', 95, 'Single slice of Cappuccino Chocolate cake', '/images/Pastries/cappuccino chocolate Pastry/cappuccino chocolate Pastry.png', { portion: '1 Slice' }),
  makeItem('choco-chips-pastry', 'Choco Chips Pastry', 75, 'Single slice of Chocochips cake', '/images/Pastries/Choco Chips pastry/Choco Chips pastry.png', { portion: '1 Slice' }),
  makeItem('choco-vanilla-pastry', 'Choco Vanilla Pastry', 80, 'Single slice of Choco Vanilla cake', '/images/Pastries/Choco Vanilla Pastry/Choco Vanilla Pastry.png', { portion: '1 Slice' }),
  makeItem('double-chocolate-pastry', 'Double Chocolate Pastry', 95, 'Single slice of chocolate loaded pastry', '/images/Pastries/Double Chocolate Pastry/Double Chocolate Pastry.png', { portion: '1 Slice' }),
  makeItem('fresh-fruit-pastry', 'Fresh Fruit Pastry', 100, 'Single slice of fresh fruit cake', '/images/Pastries/Fresh Fruit Pastry/Fresh Fruit Pastry.png', { portion: '1 Slice' }),
  makeItem('italian-tiramisu-pastry', 'Italian Tiramisu Pastry', 100, 'Single slice of authentic tiramisu', '/images/Pastries/Italian Tiramisu Pastry/Italian Tiramisu Pastry.png', { portion: '1 Slice' }),
  makeItem('mango-superaja-pastry', 'Mango Super King Pastry', 80, 'Single slice of Mango Super King cake', '/images/Pastries/Mango Superaja Pastry/Mango Superaja Pastry.png', { portion: '1 Slice' }),
  makeItem('pineapple-pastry', 'Pineapple Pastry', 70, 'Single slice of juicy pineapple cake', '/images/Pastries/Pineapple Pastry/Pineapple Pastry.png', { portion: '1 Slice' }),
  makeItem('butterscotch-pastry', 'Butterscotch Pastry', 80, 'Single slice of crunchy butterscotch cake', '/images/Pastries/ButterScotch Pastry/ButterScotch Pastry.png', { portion: '1 Slice' }),
  makeItem('strawberry-delight-pastry', 'Strawberry Pastry', 70, 'Single slice of strawberry delight cake', '/images/Pastries/Strawberry Delight Pastry/Strawberry Delight Pastry.png', { portion: '1 Slice' }),
  makeItem('strawberry-chocolate-pastry', 'Strawberry Chocolate Pastry', 75, 'Single slice of strawberry chocolate cake', '/images/Pastries/StrawBerry Chocolate Pastry/StrawBerry Chocolate Pastry.png', { portion: '1 Slice' }),
  makeItem('white-chocolate-pastry', 'White Chocolate Pastry', 85, 'Single slice of white chocolate cake', '/images/Pastries/White Chocoalate Pastry/White Chocoalate Pastry.png', { portion: '1 Slice' }),
  makeItem('white-forest-pastry', 'White Forest Pastry', 80, 'Single slice of White Forest cake', '/images/Pastries/White Forest Pastry/White Forest Pastry.png', { portion: '1 Slice' }),
  makeItem('royale-truffle-pastry', 'Royale Truffle Pastry', 99, 'Single slice of decadent royal truffle cake', '/images/Pastries/Royale Truffle Pastry/Royale Truffle Pastry.png', { portion: '1 Slice' }),
  makeItem('belgium-chocolate-pastry', 'Belgium Chocolate Pastry', 110, 'Single slice of rich Belgium chocolate cake', '', { portion: '1 Slice' }),
  makeItem('special-pastry', 'Special Pastry', 110, 'Single slice of Cocoaroma special cake', '/images/Pastries/Special Pastry/Special Pastry.png', { portion: '1 Slice' }),
  makeItem('roacher-pastry', 'Ferrero Rocher Pastry', 110, 'Single slice of Ferrero Rocher cake', '/images/Pastries/Roacher Pastry/Roacher Pastry.png', { portion: '1 Slice' }),
  makeItem('rabdi-pista-almond-pastry', 'Rabdi Pista Almond Pastry', 99, 'Single slice of Rabdi Pista Almond cake', '/images/Pastries/Rabdi Pista Almond Pastry/Rabdi Pista Almond Pastry.png', { portion: '1 Slice' }),
  makeItem('rainbow-pastry', 'Rainbow Pastry', 99, 'Single slice of colorful rainbow cake', '', { portion: '1 Slice' }),
  makeItem('rasagulla-pastry', 'Rasgulla Pastry', 120, 'Single slice of rasgulla fusion cake', '/images/Pastries/Rasagulla Pastry/Rasagulla Pastry.png', { portion: '1 Slice' }),
  makeItem('gulabjam-pastry', 'Rasmalai Pastry', 120, 'Single slice of rasmalai fusion cake', '/images/Pastries/Gulabjam Pastry/Gulabjam Pastry.png', { portion: '1 Slice' }),
  makeItem('red-velvet-pastry', 'Red Velvet Pastry', 99, 'Single slice of Red Velvet cake', '/images/Pastries/Red Velvet pastry/Red Velvet pastry.png', { portion: '1 Slice' })
];

// 13. Chocolates (Menu Page 2)
const allChocolates = [
  makeItem('chocolate-box-150', 'Chocolate Box (150 grams)', 300, 'Handcrafted artisan chocolate box (150g)', '', { weight: '150 g' }),
  makeItem('chocolate-box-250', 'Chocolate Box (250 grams)', 500, 'Luxury assorted handcrafted chocolate box (250g)', '', { weight: '250 g' }),
  makeItem('assorted-chocolates', 'Assorted Chocolates (Per Piece)', 20, 'Single handcrafted premium chocolate truffle', '', { unit: 'Per Piece' }),
  makeItem('chocolate-bouquet', 'Chocolate Bouquet', 250, 'Festive bouquet made with fine chocolate truffles', '', { unit: '1 Bouquet' }),
  makeItem('hamper-1', 'Hamper 1', 450, 'Festive gift hamper of artisan chocolates and treats', '', { unit: '1 Hamper' }),
  makeItem('hamper-2', 'Hamper 2', 550, 'Celebration hamper with assorted treats and truffles', '', { unit: '1 Hamper' }),
  makeItem('hamper-3', 'Hamper 3', 650, 'Deluxe chocolate celebration hamper', '', { unit: '1 Hamper' }),
  makeItem('hamper-4', 'Hamper 4', 1000, 'Grand luxury gift hamper packed with fine goodies', '', { unit: '1 Hamper' }),
  makeItem('hamper-5', 'Hamper 5', 1500, 'Executive gift hamper with premium chocolates and bakes', '', { unit: '1 Hamper' }),
  makeItem('hamper-6', 'Hamper 6', 2000, 'Royal luxury festive gift hamper', '', { unit: '1 Hamper' })
];

// 14. Donuts (Menu Page 2 - all 80)
const allDonuts = [
  makeItem('double-chocolate-donut', 'Double Chocolate', 80, 'Soft glazed donut dipped in double chocolate', '/images/Donuts/Double Chocolate Donut/Double Chocolate Donut.png', { portion: '1 Piece' }),
  makeItem('kitkat-chocolate-donut', 'Kitkat Chocolate', 80, 'Chocolate glazed donut topped with KitKat crunch', '/images/Donuts/Kitkat donut/Kitkat donut.png', { portion: '1 Piece' }),
  makeItem('nutella-donut', 'Nutella', 80, 'Fluffy ring smothered in rich hazelnut Nutella', '/images/Donuts/nutella Divine Donut/nutella Divine Donut.png', { portion: '1 Piece' }),
  makeItem('oreo-ring-donut', 'Oreo Ring', 80, 'Vanilla frosted ring topped with Oreo crumble', '/images/Donuts/Oreo Donut/Oreo Donut.png', { portion: '1 Piece' }),
  makeItem('chocolate-mousse-donut', 'Truffle', 80, 'Decadent chocolate truffle filled donut ring', '/images/Donuts/Truffle Donut/Truffle Donut.png', { portion: '1 Piece' }),
  makeItem('white-sprinkle-donut', 'White Sprinkle', 80, 'White chocolate glazed donut with colorful sprinkles', '/images/Donuts/white sprinkle donut/white sprinkle donut.png', { portion: '1 Piece' }),
  makeItem('caramel-almond-donut', 'Caramel Almond', 80, 'Salted caramel glaze topped with roasted almonds', '/images/Donuts/caremel donut/caremel donut.png', { portion: '1 Piece' })
];

// 15. Biscuits / Cookies (Menu Page 2)
const allCookies = [
  makeItem('fruit-Cookies', 'Fruit Biscuits', 180, 'Traditional crunchy biscuits packed with tutti frutti', '', { weight: '350 g' }),
  makeItem('kesar-badam-pista', 'Kesar Badam Pista', 255, 'Aromatic saffron butter cookies with almonds and pistachios', '', { weight: '350 g' }),
  makeItem('plain-kaju', 'Plain Kaju', 220, 'Rich butter biscuits infused with crushed cashews', '', { weight: '350 g' }),
  makeItem('chocolate-kaju', 'Chocolate Kaju', 260, 'Decadent cocoa cookies loaded with crunchy cashews', '', { weight: '350 g' }),
  makeItem('osmania', 'Osmania', 150, 'Iconic Hyderabad sweet & salty tea biscuits', '', { weight: '300 g' }),
  makeItem('moon-Cookies', 'Moon Biscuits', 135, 'Melt-in-mouth crescent shaped shortbread cookies', '', { weight: '250 g' }),
  makeItem('ajwain-Cookies', 'Ajwain Biscuits', 150, 'Savory digestive carom seed tea biscuits', '', { weight: '300 g' }),
  makeItem('coconut-cookies', 'Coconut Cookies', 165, 'Crispy golden cookies with desiccated toasted coconut', '', { weight: '300 g' }),
  makeItem('butter-almond-sticks', 'Butter Almond Sticks', 320, 'Crispy buttery pastry sticks studded with sliced almonds', '', { weight: '250 g' }),
  makeItem('kesar-badam-pista-sticks', 'Kesar Badam Pista Sticks', 320, 'Fragrant saffron and nut pastry sticks', '', { weight: '250 g' }),
  makeItem('chocolate-almond-sticks', 'Chocolate Almond Sticks', 320, 'Flaky chocolate sticks loaded with roasted almonds', '', { weight: '250 g' }),
  makeItem('double-chocolate-Cookie', 'Double Chocolate', 150, 'Intensely chocolatey cookies with dark chocolate chips', '', { weight: '200 g' }),
  makeItem('dry-fruit-Cookie', 'Dry Fruit', 150, 'Nutritious cookies loaded with assorted dry fruits', '', { weight: '200 g' }),
  makeItem('oatmeal-Cookie', 'Oatmeal', 150, 'Wholesome rolled oat cookies baked with butter', '', { weight: '200 g' }),
  makeItem('rose-pistachio', 'Rose Pistachio', 130, 'Fragrant Persian rose essence and pistachio cookies', '', { weight: '200 g' })
];

// 16. Tidbits (Menu Page 2)
const allTidbits = [
  makeItem('twisted-khari', 'Twisted Khari', 90, 'Twisted flaky puff pastry bites', '', { weight: '200 g' }),
  makeItem('butter-toast', 'Butter Toast', 90, 'Crunchy double-baked butter toast', '', { weight: '200 g' }),
  makeItem('butter-sticks', 'Butter Sticks', 90, 'Crispy buttery snack sticks', '', { weight: '200 g' }),
  makeItem('methi-khari', 'Methi Khari', 90, 'Fenugreek-infused savory layered puff', '', { weight: '200 g' }),
  makeItem('palmiers', 'Palmiers', 90, 'Elephant ear French puff pastry with caramelized sugar', '', { weight: '200 g' }),
  makeItem('cashew-rusk', 'Cashew Rusk', 170, 'Crisp golden rusks enriched with cashews', '', { weight: '250 g' }),
  makeItem('multigrain-rusk', 'Multigrain Rusk', 100, 'Healthy crisp rusks made with multigrain flour', '', { weight: '250 g' })
];

// 17. Breads (Menu Page 2)
const allBreads = [
  makeItem('white-bread', 'White Bread', 45, 'Soft, cloud-like sandwich loaf baked fresh daily', '', { weight: '400 g' }),
  makeItem('brown-bread', 'Brown Bread', 50, 'Wholesome wheat sandwich loaf rich in dietary fiber', '', { weight: '400 g' }),
  makeItem('multigrain-bread', 'Multigrain Bread', 70, 'Nutrient-rich loaf packed with wholesome seeds and grains', '', { weight: '400 g' }),
  makeItem('jumbo-bread', 'Jumbo Bread', 120, 'Extra-large sandwich loaf ideal for big families', '', { weight: '600 g' }),
  makeItem('burger-bun', 'Burger Bun', 50, 'Soft golden burger buns with sesame seeds', '', { unit: '2 Pc' }),
  makeItem('hot-dog', 'Hot Dog', 50, 'Classic elongated soft rolls for delicious hotdogs', '', { unit: '2 Pc' }),
  makeItem('pizza-base', 'Pizza Base', 60, 'Ready-to-bake handcrafted thin pizza base', '', { unit: '2 Pc' }),
  makeItem('whole-wheat-pizza-base', 'Whole Wheat Pizza Base', 70, 'Healthy whole wheat thin pizza base', '', { unit: '2 Pc' }),
  makeItem('pav-bun', 'Pav Bun', 50, 'Super-soft pillowy dinner rolls for pav bhaji and vada pav', '', { unit: '6 Pc' })
];

// 18. Tea Time Cakes (Menu Page 2)
const allTeaTimeCakes = [
  makeItem('mawa-cake', 'Mawa Cake', 80, 'Rich Parsi-style mawa cake with cardamom and pistachios', '', { weight: '150 g' }),
  makeItem('chocochips-cake-150', 'Chocochips Cake (150g)', 90, 'Soft tea cake loaded with chocolate chips', '', { weight: '150 g' }),
  makeItem('chocochips-cake-250', 'Chocochips Cake (250g)', 150, 'Generous 250g tea cake with rich chocolate chips', '', { weight: '250 g' }),
  makeItem('fruit-cake', 'Fruit Cake', 150, 'Traditional golden loaf packed with tutti frutti and candied fruits', '', { weight: '250 g' }),
  makeItem('marble-cake', 'Marble Cake', 150, 'Vanilla and chocolate swirl butter sponge loaf', '', { weight: '250 g' }),
  makeItem('plum-cake', 'Plum Cake', 150, 'Rich aromatic spice cake studded with soaked dry fruits', '', { weight: '250 g' }),
  makeItem('walnut-banana-cake', 'Walnut Banana Cake', 160, 'Moist banana bread cake packed with toasted walnuts', '', { weight: '300 g' })
];

export const CATEGORIES = [
  { id: 'regular-cakes', name: 'Regular Cakes', subtitle: 'Classic flavors baked to perfection for everyday celebrations.', image: '/images/icons/cake.png', items: allRegularCakes },
  { id: 'cheesecakes', name: 'Cheesecakes', subtitle: 'Rich, creamy, and irresistibly smooth slices of joy.', image: '/images/icons/cheese cakes.png', items: allCheesecakes },
  { id: 'brownies', name: 'Brownies & Bites', subtitle: 'Fudgy, dense, and perfectly chocolatey treats.', image: '/images/icons/brownies.png', items: allBrownies },
  { id: 'desserts', name: 'Desserts', subtitle: 'Sweet, elegant cups of layered delight.', image: '/images/icons/Desserts.png', items: allDesserts },
  { id: 'pastries', name: 'Pastries', subtitle: 'Indulgent, single-serve slices of our premium cakes.', image: '/images/icons/cake.png', items: allPastries },
  { id: 'cupcakes', name: 'Cupcakes', subtitle: 'Little drops of happiness, frosted with love.', image: '/images/icons/cupcakes.png', items: allCupcakes },
  { id: 'unique-cakes', name: 'Unique Cakes', subtitle: 'Signature artisanal creations for the discerning palate.', image: '/images/icons/unique cakes.png', items: allUniqueCakes },
  { id: 'kids-cakes', name: 'Kids Cakes', subtitle: 'Playful themes and vibrant flavors for the little ones.', image: '/images/icons/Kids Cakes.png', items: allKidsCakes },
  { id: 'savouries', name: 'Savouries', subtitle: 'Warm, crispy, and perfectly seasoned baked snacks.', image: '/images/icons/saviouries.png', items: allSavouries },
  { id: 'Cookies', name: 'Cookies', subtitle: 'Traditional tea-time companions baked with care.', image: '/images/icons/cookies.png', items: allCookies },
  { id: 'breads', name: 'Breads', subtitle: 'Freshly baked, soft, and wholesome artisanal breads.', image: '/images/icons/breads.png', items: allBreads },
  { id: 'tidbits', name: 'Tidbits', subtitle: 'Crunchy bites perfect for your evening cravings.', image: '/images/icons/tidbits.png', items: allTidbits },
  { id: 'tea-time-cakes', name: 'Tea Time Cakes', subtitle: 'Light, fluffy, and perfect with a warm cup of tea.', image: '/images/icons/tea time cakes.png', items: allTeaTimeCakes },
  { id: 'love-cakes', name: 'Love Cakes', subtitle: 'Romantic, heart-shaped delicacies to celebrate your loved ones.', image: '/images/icons/love cakes.png', items: allLoveCakes },
  { id: 'corporate-cakes', name: 'Corporate Cakes', subtitle: 'Premium, grand cakes crafted for your professional milestones.', image: '/images/icons/corpate cakes.png', items: allCorporateCakes },
  { id: 'gifting-cakes', name: 'Gifting Cakes', subtitle: 'Elegant and memorable cakes meant to be shared.', image: '/images/icons/gifting cakes.png', items: allGiftingCakes },
  { id: 'chocolates', name: 'Chocolates', subtitle: 'Handcrafted luxury chocolate truffles and hampers.', image: '/images/icons/chocolates.png', items: allChocolates },
  { id: 'donuts', name: 'Donuts', subtitle: 'Soft, airy rings glazed with pure chocolatey goodness.', image: '/images/icons/donut.png', items: allDonuts }
];

export const getAllProducts = () => {
  return CATEGORIES.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryId: cat.id, categoryName: cat.name }))
  );
};

export const getProductById = (id) => {
  return getAllProducts().find(p => p.id === id);
};

// --- FEATURED EXPORTS FOR BAKERY MENU PAGE ---
export const regularCakes = allRegularCakes.slice(0, 2);
export const cheesecakes = allCheesecakes.slice(0, 2);
export const brownies = allBrownies.slice(0, 3);
export const desserts = allDesserts.slice(0, 3);
export const cupcakes = allCupcakes.slice(0, 3);
export const uniqueCakes = allUniqueCakes.slice(0, 2);
export const kidsCakes = allKidsCakes.slice(0, 2);
export const savouries = allSavouries.slice(0, 3);
export const Cookies = allCookies.slice(0, 3);
export const breads = allBreads.slice(0, 3);
export const teaTimeCakes = allTeaTimeCakes.slice(0, 3);
export const loveCakes = allLoveCakes.slice(0, 2);
export const corporateCakes = allCorporateCakes.slice(0, 2);
export const giftingCakes = allGiftingCakes.slice(0, 2);
export const chocolates = allChocolates.slice(0, 2);
export const donuts = allDonuts.slice(0, 2);
export const pastries = allPastries.slice(0, 3);
