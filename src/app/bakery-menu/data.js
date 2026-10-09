// All product data for the Cocoa Aroma Bakery Menu

function makeItem(id, name, price, description = '', img = '') {
  return {
    id,
    name,
    description: description || name,
    price,
    image: img || '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  };
}

const allRegularCakes = [
  makeItem('black-forest', 'Black Forest', 525, '', '/images/cakes/black-forest/1.png'),
  makeItem('almond-chocolate', 'Almond Chocolate', 600, '', '/images/cakes/almond-chocolate/1.png'),
  makeItem('cappuccino-chocolate', 'Cappuccino Chocolate', 600, '', '/images/cakes/cappuccino-chocolate/1.png'),
  makeItem('chocochips', 'Chocochips', 530),
  makeItem('choco-vanilla', 'Choco Vanilla', 450, '', '/images/cakes/choco-vanilla/1.png'),
  makeItem('chocolate-loaded', 'Chocolate Loaded', 600, '', '/images/cakes/chocolate-loaded/1.png'),
  makeItem('chocolate-loaded-butter-cream', 'Chocolate Loaded Butter Cream', 560, '', '/images/cakes/chocolate-loaded-butter-cream/1.png'),
  makeItem('fresh-fruit', 'Fresh Fruit', 700),
  makeItem('tiramisu', 'Tiramisu', 650, '', '/images/cakes/tiramisu/1.png'),
  makeItem('mango-super-king', 'Mango Super King', 450, '', '/images/cakes/mango-super-king/1.png'),
  makeItem('pineapple', 'Pineapple', 420, '', '/images/cakes/pineapple/1.png'),
  makeItem('butterscotch', 'Butterscotch', 450, '', '/images/cakes/butterscotch/1.png'),
  makeItem('butterscotch-chocolate', 'Butterscotch Chocolate', 450, '', '/images/cakes/butterscotch-chocolate/1.png'),
  makeItem('strawberry', 'Strawberry', 420, '', '/images/cakes/strawberry/1.png'),
  makeItem('strawberry-chocolate', 'Strawberry Chocolate', 550),
  makeItem('blue-smash-cake', 'Blue Smash Cake', 800),
  makeItem('pink-smash-cake', 'Pink Smash Cake', 800),
  makeItem('white-chocolate', 'White Chocolate', 550, '', '/images/cakes/white-chocolate/1.png'),
  makeItem('white-forest', 'White Forest', 500, '', '/images/cakes/white-forest/1.png'),
  makeItem('kiwi-delight', 'Kiwi Delight', 450, '', '/images/cakes/kiwi-delight/1.png')
];

const allUniqueCakes = [
  makeItem('all-topped-chocolate', 'All Topped Chocolate', 750),
  makeItem('royale-truffle', 'Royal Truffle', 650, '', '/images/cakes/royale-truffle/1.png'),
  makeItem('belgium-chocolate', 'Belgium Chocolate', 600, '', '/images/cakes/belgium-chocolate/1.png'),
  makeItem('cocoaroma-spl-cake', 'Cocoaroma Spl Cake', 600),
  makeItem('dry-fruit-vanilla', 'Dry Fruit Vanilla', 700),
  makeItem('ferrero-rocher', 'Ferrero Rocher', 600, '', '/images/cakes/ferrero-rocher/1.png'),
  makeItem('rabdi-pista-almond', 'Rabdi Pista Almond', 630, '', '/images/cakes/rabdi-pista-almond/1.png'),
  makeItem('rainbow', 'Rainbow', 650),
  makeItem('rasgulla', 'Rasgulla', 600),
  makeItem('rasmalai', 'Rasmalai', 700, '', '/images/cakes/rasmalai/1.png'),
  makeItem('red-velvet', 'Red Velvet', 550, '', '/images/cakes/red-velvet/1.png')
];

const allKidsCakes = [
  makeItem('kids-theme-1', 'Kids Theme 1 (Angry Bird)', 1300),
  makeItem('kids-theme-2', 'Kids Theme 2 (Funny)', 1300),
  makeItem('kids-theme-3', 'Kids Theme 3 (Pooh)', 1300),
  makeItem('kids-theme-4', 'Kids Theme 4 (Barbie)', 1300),
  makeItem('kids-theme-5', 'Kids Theme 5 (Car)', 1300),
  makeItem('kids-theme-6', 'Kids Theme 6 (Bob Of Minions)', 1300),
  makeItem('kids-theme-7', 'Kids Theme 7 (Stan Lee Spiderman)', 1500)
];

const allLoveCakes = [
  makeItem('beloved', 'Beloved', 699, '', '/images/cakes/beloved/1.png'),
  makeItem('sweet-heart', 'Sweet Heart', 699, '', '/images/cakes/sweet-heart/1.png'),
  makeItem('love-crush', 'Love Crush', 699),
  makeItem('french-hearts', 'French Hearts', 699),
  makeItem('love', 'Love', 699)
];

const allCorporateCakes = [
  makeItem('choco-praline', 'Choco Praline', 1200, '', '/images/cakes/choco-praline/1.png'),
  makeItem('chocolate-nutty', 'Chocolate Nutty', 1200),
  makeItem('death-by-chocolate', 'Death By Chocolate', 1200),
  makeItem('frosted', 'Frosted', 1200),
  makeItem('loaded-rocher', 'Loaded Rocher', 1200, '', '/images/cakes/loaded-rocher/1.png'),
  makeItem('pinata-black', 'Pinata Black', 1500),
  makeItem('pinata-red', 'Pinata Red', 1500)
];

const allCheesecakes = [
  makeItem('blueberry-cheesecake', 'Blueberry Cheesecake', 850, '', '/images/Cheese Cakes/Blue Berry Cheese Cake/Blue Berry Cheese Cake.png'),
  { ...makeItem('biscoff-cheesecake', 'Biscoff Cheesecake', 850, '', '/images/Cheese Cakes/Biscoff Cheese Cake/Biscoff Cheese Cake.png'), imageScale: 1.2 },
  makeItem('red-velvet-cheesecake', 'Red Velvet Cheesecake', 850, '', '/images/Cheese Cakes/Red Velvet Cheese Cake/Red Velvet Cheese Cake.png'),
  { ...makeItem('nutella-cheesecake', 'Nutella Cheesecake', 850, '', '/images/Cheese Cakes/Nutella Cheese Cake/Nutella Cheese Cake.png'), imageScale: 1.2 }
];

const allGiftingCakes = [
  makeItem('forever-1', 'Forever 1', 800),
  makeItem('forever-2', 'Forever 2', 800),
  makeItem('forever-3', 'Forever 3', 800),
  makeItem('forever-4', 'Forever 4', 800),
  makeItem('forever-5', 'Forever 5', 800)
];

const allBrownies = [
  makeItem('choco-chip-brownie', 'Choco Chip Brownie', 80, '', '/images/Brownies/ChocoChip Brownie/ChocoChip Brownie.png'),
  makeItem('walnut-brownie', 'Walnut Brownie', 80, '', '/images/Brownies/Walnut Brownie/Walnut Brownie.png'),
  makeItem('nutella-brownie', 'Nutella Brownie', 100, '', '/images/Brownies/Nutella Brownie/Nutella Brownie.png')
];

const allCupcakes = [
  makeItem('belgium-cupcake', 'Belgium Cupcake', 65, '', '/images/Cupcakes/Belgium Cupcake/Belgium Cupcake.png'),
  makeItem('blueberry-cupcake', 'Blueberry Cupcake', 65, '', '/images/Cupcakes/BlueBerry Cupcake/BlueBerry Cupcake.png'),
  makeItem('hazelnut-truffle', 'Hazelnut Truffle', 65, '', '/images/Cupcakes/Hazelnut Cupcake/Hazelnut Cupcake.png'),
  makeItem('red-velvet-cupcake', 'Red Velvet Cupcake', 75, '', '/images/Cupcakes/RedVelvet Cupcake/RedVelvet Cupcake.png'),
  makeItem('vanilla-cream-frosting', 'Vanilla Cream Frosting', 65, '', '/images/Cupcakes/VanillaFrosting Cupcake/VanillaFrosting Cupcake.png')
];

const allSavouries = [
  makeItem('veg-patties', 'Veg Patties', 35),
  makeItem('paneer-patties', 'Paneer Patties', 40),
  makeItem('mushroom-patties', 'Mushroom Patties', 40),
  makeItem('paneer-chilli-roll', 'Paneer Chilli Roll', 35),
  makeItem('palak-paneer-roll', 'Palak Paneer Roll', 35),
  makeItem('gobi-manchurian-roll', 'Gobi Manchurian Roll', 35),
  makeItem('paneer-kulcha-roll', 'Paneer Kulcha Roll', 35),
  makeItem('baby-pizza', 'Baby Pizza', 75),
  makeItem('white-bread-vegetable-sandwich', 'White Bread Vegetable Sandwich', 50),
  makeItem('brown-bread-vegetable-sandwich', 'Brown Bread Vegetable Sandwich', 50),
  makeItem('double-cheese-garlic-bread', 'Double Cheese Garlic Bread', 65),
  makeItem('cream-bun', 'Cream Bun', 25),
  makeItem('dilpasand', 'Dilpasand', 25),
  makeItem('dilkhush', 'Dilkhush', 30)
];

const allDesserts = [
  makeItem('chocolate-lava', 'Chocolate Lava', 75),
  makeItem('dark-mousse', 'Dark Mousse', 90, '', '/images/Desserts/dark mousse/dark mousse.png'),
  makeItem('kitkat-mousse', 'Kitkat Mousse', 90, '', '/images/Desserts/kitkat mousse/kitkat mousse.png'),
  makeItem('trio-mousse', 'Trio Mousse', 90, '', '/images/Desserts/trio mousse/trio mousse.png')
];

const allPastries = [
  makeItem('angry-bird-pastry', 'Angry Bird Pastry', 80, '', '/images/Pastries/Angry Bird Pastry/Angry Bird Pastry.png'),
  makeItem('black-forest-pastry', 'Black Forest Pastry', 80, '', '/images/Pastries/Black Forest Pastry/Black Forest Pastry.png'),
  makeItem('butterscotch-pastry', 'Butterscotch Pastry', 80, '', '/images/Pastries/ButterScotch Pastry/ButterScotch Pastry.png'),
  makeItem('cappuccino-chocolate-pastry', 'Cappuccino Chocolate Pastry', 95, '', '/images/Pastries/cappuccino chocolate Pastry/cappuccino chocolate Pastry.png'),
  makeItem('choco-chips-pastry', 'Choco Chips Pastry', 75, '', '/images/Pastries/Choco Chips pastry/Choco Chips pastry.png'),
  makeItem('choco-vanilla-pastry', 'Choco Vanilla Pastry', 80, '', '/images/Pastries/Choco Vanilla Pastry/Choco Vanilla Pastry.png'),
  makeItem('double-chocolate-pastry', 'Double Chocolate Pastry', 95, '', '/images/Pastries/Double Chocolate Pastry/Double Chocolate Pastry.png'),
  makeItem('fresh-fruit-pastry', 'Fresh Fruit Pastry', 100, '', '/images/Pastries/Fresh Fruit Pastry/Fresh Fruit Pastry.png'),
  makeItem('gulabjam-pastry', 'Gulabjam Pastry', 120, '', '/images/Pastries/Gulabjam Pastry/Gulabjam Pastry.png'),
  makeItem('italian-tiramisu-pastry', 'Italian Tiramisu Pastry', 100, '', '/images/Pastries/Italian Tiramisu Pastry/Italian Tiramisu Pastry.png'),
  makeItem('mango-superaja-pastry', 'Mango Superaja Pastry', 80, '', '/images/Pastries/Mango Superaja Pastry/Mango Superaja Pastry.png'),
  makeItem('panda-pastry', 'Panda Pastry', 80, '', '/images/Pastries/Panda Pastry/Panda Pastry.png'),
  makeItem('pineapple-pastry', 'Pineapple Pastry', 70, '', '/images/Pastries/Pineapple Pastry/Pineapple Pastry.png'),
  makeItem('rabdi-pista-almond-pastry', 'Rabdi Pista Almond Pastry', 99, '', '/images/Pastries/Rabdi Pista Almond Pastry/Rabdi Pista Almond Pastry.png'),
  makeItem('rasagulla-pastry', 'Rasagulla Pastry', 120, '', '/images/Pastries/Rasagulla Pastry/Rasagulla Pastry.png'),
  makeItem('red-velvet-pastry', 'Red Velvet Pastry', 99, '', '/images/Pastries/Red Velvet pastry/Red Velvet pastry.png'),
  makeItem('roacher-pastry', 'Roacher Pastry', 110, '', '/images/Pastries/Roacher Pastry/Roacher Pastry.png'),
  makeItem('royale-truffle-pastry', 'Royale Truffle Pastry', 99, '', '/images/Pastries/Royale Truffle Pastry/Royale Truffle Pastry.png'),
  makeItem('special-pastry', 'Special Pastry', 110, '', '/images/Pastries/Special Pastry/Special Pastry.png'),
  makeItem('strawberry-chocolate-pastry', 'Strawberry Chocolate Pastry', 75, '', '/images/Pastries/StrawBerry Chocolate Pastry/StrawBerry Chocolate Pastry.png'),
  makeItem('strawberry-delight-pastry', 'Strawberry Delight Pastry', 70, '', '/images/Pastries/Strawberry Delight Pastry/Strawberry Delight Pastry.png'),
  makeItem('white-chocolate-pastry', 'White Chocolate Pastry', 85, '', '/images/Pastries/White Chocoalate Pastry/White Chocoalate Pastry.png'),
  makeItem('white-forest-pastry', 'White Forest Pastry', 80, '', '/images/Pastries/White Forest Pastry/White Forest Pastry.png')
];

const allChocolates = [
  makeItem('chocolate-box-150', 'Chocolate Box (150 grams)', 300),
  makeItem('chocolate-box-250', 'Chocolate Box (250 grams)', 500),
  makeItem('assorted-chocolates', 'Assorted Chocolates (Per Piece)', 20),
  makeItem('chocolate-bouquet', 'Chocolate Bouquet', 250),
  makeItem('hamper-1', 'Hamper 1', 450),
  makeItem('hamper-2', 'Hamper 2', 550),
  makeItem('hamper-3', 'Hamper 3', 650),
  makeItem('hamper-4', 'Hamper 4', 1000),
  makeItem('hamper-5', 'Hamper 5', 1500),
  makeItem('hamper-6', 'Hamper 6', 2000)
];

const allDonuts = [
  makeItem('double-chocolate-donut', 'Double Chocolate', 80, '', '/images/Donuts/Double Chocolate Donut/Double Chocolate Donut.png'),
  makeItem('kitkat-chocolate-donut', 'Kitkat Chocolate', 80, '', '/images/Donuts/Kitkat donut/Kitkat donut.png'),
  makeItem('nutella-donut', 'Nutella', 80, '', '/images/Donuts/nutella Divine Donut/nutella Divine Donut.png'),
  makeItem('oreo-ring-donut', 'Oreo Ring', 80, '', '/images/Donuts/Oreo Donut/Oreo Donut.png'),
  makeItem('chocolate-mousse-donut', 'Chocolate Mousse', 80, '', '/images/Donuts/Truffle Donut/Truffle Donut.png'),
  makeItem('truffle-chocolate-donut', 'Truffle Chocolate', 80, '', '/images/Donuts/Truffle Chocolate Donut/Truffle Chocolate Donut.png'),
  makeItem('white-sprinkle-donut', 'White Sprinkle', 80, '', '/images/Donuts/white sprinkle donut/white sprinkle donut.png'),
  makeItem('caramel-almond-donut', 'Caramel Almond', 80, '', '/images/Donuts/caremel donut/caremel donut.png'),
  makeItem('red-velvet-donut', 'Red Velvet', 80, '', '/images/Donuts/RedVelvet Donut/RedVelvet Donut.png')
];

const allBiscuits = [
  makeItem('fruit-biscuits', 'Fruit Biscuits', 180),
  makeItem('kesar-badam-pista', 'Kesar Badam Pista', 255),
  makeItem('plain-kaju', 'Plain Kaju', 220),
  makeItem('chocolate-kaju', 'Chocolate Kaju', 260),
  makeItem('osmania', 'Osmania', 150),
  makeItem('moon-biscuits', 'Moon Biscuits', 135),
  makeItem('ajwain-biscuits', 'Ajwain Biscuits', 150),
  makeItem('coconut-cookies', 'Coconut Cookies', 165),
  makeItem('butter-almond-sticks', 'Butter Almond Sticks', 320),
  makeItem('kesar-badam-pista-sticks', 'Kesar Badam Pista Sticks', 320),
  makeItem('chocolate-almond-sticks', 'Chocolate Almond Sticks', 320),
  makeItem('double-chocolate-biscuit', 'Double Chocolate', 150),
  makeItem('dry-fruit-biscuit', 'Dry Fruit', 150),
  makeItem('oatmeal-biscuit', 'Oatmeal', 150),
  makeItem('rose-pistachio', 'Rose Pistachio', 130)
];

const allTidbits = [
  makeItem('twisted-khari', 'Twisted Khari', 90),
  makeItem('butter-toast', 'Butter Toast', 90),
  makeItem('butter-sticks', 'Butter Sticks', 90),
  makeItem('methi-khari', 'Methi Khari', 90),
  makeItem('palmiers', 'Palmiers', 90),
  makeItem('cashew-rusk', 'Cashew Rusk', 170),
  makeItem('multigrain-rusk', 'Multigrain Rusk', 100)
];

const allBreads = [
  makeItem('white-bread', 'White Bread', 45),
  makeItem('brown-bread', 'Brown Bread', 50),
  makeItem('multigrain-bread', 'Multigrain Bread', 70),
  makeItem('jumbo-bread', 'Jumbo Bread', 120),
  makeItem('burger-bun', 'Burger Bun', 50),
  makeItem('hot-dog', 'Hot Dog', 50),
  makeItem('pizza-base', 'Pizza Base', 60),
  makeItem('whole-wheat-pizza-base', 'Whole Wheat Pizza Base', 70),
  makeItem('pav-bun', 'Pav Bun', 50),
  makeItem('focaccia', 'Focaccia', 60)
];

const allTeaTimeCakes = [
  makeItem('mawa-cake', 'Mawa Cake', 80),
  makeItem('chocochips-cake-150', 'Chocochips Cake (150g)', 90),
  makeItem('chocochips-cake-250', 'Chocochips Cake (250g)', 150),
  makeItem('fruit-cake', 'Fruit Cake', 150),
  makeItem('marble-cake', 'Marble Cake', 150),
  makeItem('plum-cake', 'Plum Cake', 150),
  makeItem('walnut-banana-cake', 'Walnut Banana Cake', 160)
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
  { id: 'biscuits', name: 'Biscuits', subtitle: 'Traditional tea-time companions baked with care.', image: '/images/icons/cookies.png', items: allBiscuits },
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
export const regularCakes = [
  {
    id: 'black-forest',
    name: 'Black Forest',
    description: 'Classic rich black forest cake',
    price: 525,
    badge: 'BEST SELLER',
    image: '/images/cakes/black-forest/1.png',
    imageFallback: '/images/cakes/black-forest/1.jpg',
  },
  {
    id: 'almond-chocolate',
    name: 'Almond Chocolate',
    description: 'Rich almond chocolate delight',
    price: 600,
    badge: 'NEW',
    image: '/images/cakes/almond-chocolate/1.png',
    imageFallback: '/images/cakes/almond-chocolate/1.jpg',
  }
];

export const cheesecakes = [
  {
    id: 'blueberry-cheesecake',
    name: 'Blueberry Cheesecake',
    description: 'Classic creamy blueberry cheesecake',
    price: 850,
    image: '/images/Cheese Cakes/Blue Berry Cheese Cake/Blue Berry Cheese Cake.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'biscoff-cheesecake',
    name: 'Biscoff Cheesecake',
    description: 'Rich biscoff flavor',
    price: 850,
    image: '/images/Cheese Cakes/Biscoff Cheese Cake/Biscoff Cheese Cake.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
    imageScale: 1.2,
  }
];

export const brownies = [
  {
    id: 'choco-chip-brownie',
    name: 'Choco Chip Brownie',
    description: 'Rich fudgy brownie with chocochips',
    price: 80,
    image: '/images/Brownies/ChocoChip Brownie/ChocoChip Brownie.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'walnut-brownie',
    name: 'Walnut Brownie',
    description: 'Classic walnut infused brownie',
    price: 80,
    image: '/images/Brownies/Walnut Brownie/Walnut Brownie.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'nutella-brownie',
    name: 'Nutella Brownie',
    description: 'Decadent nutella goodness',
    price: 100,
    image: '/images/Brownies/Nutella Brownie/Nutella Brownie.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];

export const desserts = [
  {
    id: 'dark-mousse',
    name: 'Dark Mousse',
    description: 'Silky dark chocolate mousse',
    price: 90,
    image: '/images/Desserts/dark mousse/dark mousse.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'kitkat-mousse',
    name: 'Kitkat Mousse',
    description: 'Creamy mousse with crunchy KitKat',
    price: 90,
    image: '/images/Desserts/kitkat mousse/kitkat mousse.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'trio-mousse',
    name: 'Trio Mousse',
    description: 'Three layers of chocolate heaven',
    price: 90,
    image: '/images/Desserts/trio mousse/trio mousse.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];

export const cupcakes = [
  {
    id: 'belgium-cupcake',
    name: 'Belgium Cupcake',
    description: 'Premium belgium chocolate cupcake',
    price: 65,
    image: '/images/Cupcakes/Belgium Cupcake/Belgium Cupcake.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'blueberry-cupcake',
    name: 'Blueberry Cupcake',
    description: 'Sweet blueberry topped cupcake',
    price: 65,
    image: '/images/Cupcakes/BlueBerry Cupcake/BlueBerry Cupcake.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'red-velvet-cupcake',
    name: 'Red Velvet Cupcake',
    description: 'Classic red velvet frosted cupcake',
    price: 75,
    image: '/images/Cupcakes/RedVelvet Cupcake/RedVelvet Cupcake.png',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];

export const uniqueCakes = [
  {
    id: 'belgium-chocolate',
    name: 'Belgium Chocolate',
    description: 'Rich belgium chocolate indulgence',
    price: 600,
    badge: 'BEST SELLER',
    image: '/images/cakes/belgium-chocolate/1.png',
    imageFallback: '/images/cakes/belgium-chocolate/1.jpg',
  },
  {
    id: 'royale-truffle',
    name: 'Royal Truffle',
    description: 'Decadent royal truffle cake',
    price: 650,
    badge: 'NEW',
    image: '/images/cakes/royale-truffle/1.png',
    imageFallback: '/images/cakes/royale-truffle/1.jpg',
  }
];

export const kidsCakes = [
  {
    id: 'kids-theme-1',
    name: 'Kids Theme 1 (Angry Bird)',
    description: 'Fun & colorful theme cake',
    price: 1300,
    image: '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  },
  {
    id: 'kids-theme-2',
    name: 'Kids Theme 2 (Funny)',
    description: 'Playful character design',
    price: 1300,
    image: '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];

export const savouries = allSavouries.slice(0, 3);
export const biscuits = allBiscuits.slice(0, 3);
export const breads = allBreads.slice(0, 3);
export const teaTimeCakes = allTeaTimeCakes.slice(0, 3);

export const loveCakes = [
  {
    id: 'sweet-heart',
    name: 'Sweet Heart',
    description: 'Beautiful heart shaped cake',
    price: 699,
    badge: 'BEST SELLER',
    image: '/images/cakes/sweet-heart/1.png',
    imageFallback: '/images/cakes/sweet-heart/1.jpg',
  },
  {
    id: 'beloved',
    name: 'Beloved',
    description: 'Romantic design',
    price: 699,
    image: '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];

export const corporateCakes = [
  {
    id: 'choco-praline',
    name: 'Choco Praline',
    description: 'Premium corporate cake',
    price: 1200,
    image: '/images/cakes/choco-praline/1.png',
    imageFallback: '/images/cakes/choco-praline/1.jpg',
  },
  {
    id: 'pinata-black',
    name: 'Pinata Black',
    description: 'Fun breakable cake',
    price: 1500,
    image: '/images/cakes/image-coming-soon.svg',
    imageFallback: '/images/cakes/image-coming-soon.svg',
  }
];
