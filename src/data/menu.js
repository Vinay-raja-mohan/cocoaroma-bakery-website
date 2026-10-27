// Complete menu data for Cocoaroma Bakery
// Prices are in INR (₹)
// Images: 1.png = front angle, 2.png = top angle, 3.png = down angle

export const categories = [
  {
    id: 'regular-cakes',
    name: 'Regular Cakes & Pastries',
    description: 'Classic flavors crafted to perfection',
    icon: 'CakeSlice',
    items: [
      { name: 'Black Forest', slug: 'black-forest', pastry: 80, small: 525, large: 930, hasImages: true },
      { name: 'Almond Chocolate', slug: 'almond-chocolate', pastry: 85, small: 600, large: 1050, hasImages: true },
      { name: 'Cappuccino Chocolate', slug: 'cappuccino-chocolate', pastry: 95, small: 600, large: 950, hasImages: true },
      { name: 'Chocochips', slug: 'choco-chip', pastry: 75, small: 530, large: 850, hasImages: true },
      { name: 'Choco Vanilla', slug: 'choco-vanilla', pastry: 85, small: 450, large: 880, hasImages: true },
      { name: 'Chocolate Loaded', slug: 'chocolate-loaded', pastry: 95, small: 600, large: 1050, hasImages: true },
      { name: 'Chocolate Loaded Butter Cream', slug: 'chocolate-loaded-butter-cream', pastry: 100, small: 560, large: 1200, hasImages: true },
      { name: 'Fresh Fruit', slug: 'fresh-fruit', pastry: 105, small: 700, large: 1100, hasImages: false },
      { name: 'Tiramisu', slug: 'tiramisu', pastry: 100, small: 650, large: null, hasImages: true },
      { name: 'Mango Super King', slug: 'mango-super-king', pastry: 80, small: 450, large: 800, hasImages: true },
      { name: 'Pineapple', slug: 'pineapple', pastry: 70, small: 420, large: 800, hasImages: true },
      { name: 'Butterscotch', slug: 'butterscotch', pastry: 80, small: 450, large: 850, hasImages: true },
      { name: 'Butterscotch Chocolate', slug: 'butterscotch-chocolate', pastry: 75, small: 450, large: 1000, hasImages: true },
      { name: 'Strawberry', slug: 'strawberry', pastry: 70, small: 420, large: 800, hasImages: true },
      { name: 'Strawberry Chocolate', slug: null, pastry: null, small: 550, large: null, hasImages: false },
      { name: 'Blue Smash Cake', slug: null, pastry: null, small: 800, large: 1500, hasImages: false },
      { name: 'Pink Smash Cake', slug: null, pastry: null, small: 800, large: 1500, hasImages: false },
      { name: 'White Chocolate', slug: 'white-chocolate', pastry: 85, small: 550, large: 1500, hasImages: true },
      { name: 'White Forest', slug: 'white-forest', pastry: null, small: 500, large: 1000, hasImages: true },
      { name: 'Kiwi Delight', slug: 'kiwi-delight', pastry: 80, small: 450, large: 1000, hasImages: true },
    ]
  },
  {
    id: 'unique-cakes',
    name: 'Unique Cakes & Pastries',
    description: 'Extraordinary flavors for special moments',
    icon: 'Sparkles',
    items: [
      { name: 'All Topped Chocolate', slug: null, pastry: null, small: 750, large: null, hasImages: false },
      { name: 'Royal Truffle', slug: 'royale-truffle', pastry: null, small: 650, large: null, hasImages: true },
      { name: 'Belgium Chocolate', slug: 'belgium-chocolate', pastry: 110, small: 600, large: null, hasImages: true },
      { name: 'Cocoaroma Spl Cake', slug: null, pastry: 110, small: 600, large: null, hasImages: false },
      { name: 'Dry Fruit Vanilla', slug: null, pastry: 99, small: 700, large: null, hasImages: false },
      { name: 'Ferrero Rocher', slug: 'ferrero-rocher', pastry: null, small: 600, large: null, hasImages: true },
      { name: 'Rabdi Pista Almond', slug: 'rabdi-pista-almond', pastry: 120, small: 630, large: null, hasImages: true },
      { name: 'Rainbow', slug: null, pastry: null, small: 650, large: null, hasImages: false },
      { name: 'Rasgulla', slug: 'rasagulla', pastry: 120, small: 600, large: null, hasImages: true },
      { name: 'Rasmalai', slug: 'rasmalai', pastry: 99, small: 700, large: null, hasImages: true },
      { name: 'Red Velvet', slug: 'red-velvet', pastry: 99, small: 550, large: null, hasImages: true },
    ]
  },
  {
    id: 'love-cakes',
    name: 'Love Cakes (Heart Shaped)',
    description: 'Express your love with heart-shaped delights',
    icon: 'Heart',
    items: [
      { name: 'Beloved', slug: 'beloved', pastry: null, small: 699, large: null, hasImages: true },
      { name: 'Sweet Heart', slug: 'sweet-heart', pastry: null, small: 699, large: null, hasImages: true },
      { name: 'Love Crush', slug: null, pastry: null, small: 699, large: null, hasImages: false },
      { name: 'French Hearts', slug: null, pastry: null, small: 699, large: null, hasImages: false },
    ]
  },
  {
    id: 'kids-cakes',
    name: 'Kids Cakes',
    description: 'Fun-filled cakes for little celebrations',
    icon: 'Baby',
    items: [
      { name: 'Kids Theme 1 (Angry Bird)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 2 (Funny)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 3 (Pooh)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 4 (Barbie)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 5 (Car)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 6 (Bob / Minions)', slug: null, pastry: null, small: null, large: 1300, hasImages: false },
      { name: 'Kids Theme 7 (Stan Lee / Spiderman)', slug: null, pastry: null, small: null, large: 1500, hasImages: false },
    ]
  },
  {
    id: 'corporate-cakes',
    name: 'Corporate Cakes',
    description: 'Elegant cakes for corporate celebrations',
    icon: 'Building',
    items: [
      { name: 'Choco Praline', slug: 'choco-praline', pastry: null, small: null, large: 1200, hasImages: true },
      { name: 'Chocolate Nutty', slug: null, pastry: null, small: null, large: 1200, hasImages: false },
      { name: 'Death By Chocolate', slug: null, pastry: null, small: null, large: 1200, hasImages: false },
      { name: 'Frosted', slug: null, pastry: null, small: null, large: 1200, hasImages: false },
      { name: 'Loaded Rocher', slug: 'loaded-rocher', pastry: null, small: null, large: 1200, hasImages: true },
      { name: 'Pinata Black', slug: null, pastry: null, small: null, large: 1500, hasImages: false },
      { name: 'Pinata Red', slug: null, pastry: null, small: null, large: 1500, hasImages: false },
    ]
  },
  {
    id: 'cheesecakes',
    name: 'Cheesecakes',
    description: 'Rich & creamy cheesecake collection',
    icon: 'Cheese',
    items: [
      { name: 'Blueberry Cheesecake', slug: null, pastry: 170, small: 850, large: 1400, hasImages: false },
      { name: 'Biscoff Cheesecake', slug: null, pastry: 170, small: 850, large: 1400, hasImages: false },
      { name: 'Red Velvet Cheesecake', slug: null, pastry: 170, small: 850, large: 1400, hasImages: false },
      { name: 'Nutella Cheesecake', slug: null, pastry: 170, small: 850, large: 1400, hasImages: false },
    ]
  },
  {
    id: 'gifting-cakes',
    name: 'Gifting Cakes - 600gm',
    description: 'Perfect cakes for gifting occasions',
    icon: 'Gift',
    items: [
      { name: 'Forever 1', slug: null, pastry: null, small: null, large: null, price: 800, hasImages: false },
      { name: 'Forever 2', slug: null, pastry: null, small: null, large: null, price: 800, hasImages: false },
      { name: 'Forever 3', slug: null, pastry: null, small: null, large: null, price: 800, hasImages: false },
      { name: 'Forever 4', slug: null, pastry: null, small: null, large: null, price: 800, hasImages: false },
      { name: 'Forever 5', slug: null, pastry: null, small: null, large: null, price: 800, hasImages: false },
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies',
    description: 'Fudgy, rich chocolate brownies',
    icon: 'SquareStack',
    items: [
      { name: 'Choco Chip Brownie', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Walnut Brownie', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Nutella Brownie', slug: null, pastry: null, small: null, large: null, price: 100, hasImages: false },
    ]
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    description: 'Delightful individual cupcake treats',
    icon: 'Cupcake',
    items: [
      { name: 'Belgium Cupcake', slug: null, pastry: null, small: null, large: null, price: 65, hasImages: false },
      { name: 'Blueberry Cupcake', slug: null, pastry: null, small: null, large: null, price: 65, hasImages: false },
      { name: 'Raspberry Cupcake', slug: null, pastry: null, small: null, large: null, price: 65, hasImages: false },
      { name: 'Hazelnut Truffle', slug: null, pastry: null, small: null, large: null, price: 75, hasImages: false },
      { name: 'Red Velvet Cupcake', slug: null, pastry: null, small: null, large: null, price: 65, hasImages: false },
      { name: 'Vanilla Cream Frosting', slug: null, pastry: null, small: null, large: null, price: 65, hasImages: false },
    ]
  },
  {
    id: 'savoury',
    name: 'Savoury',
    description: 'Delicious savoury snacks & bites',
    icon: 'Croissant',
    items: [
      { name: 'Paneer Patties', slug: null, pastry: null, small: null, large: null, price: 35, hasImages: false },
      { name: 'Veg Patties', slug: null, pastry: null, small: null, large: null, price: 35, hasImages: false },
      { name: 'Mushroom Patties', slug: null, pastry: null, small: null, large: null, price: 40, hasImages: false },
      { name: 'Paneer Chilli Roll', slug: null, pastry: null, small: null, large: null, price: 45, hasImages: false },
      { name: 'Palak Paneer Roll', slug: null, pastry: null, small: null, large: null, price: 35, hasImages: false },
      { name: 'Gobhi Manchurian Roll', slug: null, pastry: null, small: null, large: null, price: 35, hasImages: false },
      { name: 'Baby Pizza', slug: null, pastry: null, small: null, large: null, price: 35, hasImages: false },
    ]
  },
  {
    id: 'donuts',
    name: 'Donuts',
    description: 'Freshly fried, beautifully glazed donuts',
    icon: 'Donut',
    items: [
      { name: 'Double Chocolate', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Kitkat Chocolate', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Nutella', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Oreo Ring', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'White Sprinkle', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Truffle', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Coffee', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Caramel Almond', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
      { name: 'Hazelnut', slug: null, pastry: null, small: null, large: null, price: 80, hasImages: false },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Indulgent desserts for every sweet tooth',
    icon: 'IceCream',
    items: [
      { name: 'Chocolate Lava', slug: null, pastry: null, small: null, large: null, price: 75, hasImages: false },
      { name: 'Dark Mousse', slug: null, pastry: null, small: null, large: null, price: 90, hasImages: false },
      { name: 'Kitkat Mousse', slug: null, pastry: null, small: null, large: null, price: 90, hasImages: false },
      { name: 'Trio Mousse', slug: null, pastry: null, small: null, large: null, price: 85, hasImages: false },
      { name: 'Apple Pie', slug: null, pastry: null, small: null, large: null, price: 85, hasImages: false },
      { name: 'Honey Coconut Slice', slug: null, pastry: null, small: null, large: null, price: 50, hasImages: false },
      { name: 'Pistachio Tres Leches', slug: null, pastry: null, small: null, large: null, price: 170, hasImages: false },
      { name: 'Nutella Frosted Slice', slug: null, pastry: null, small: null, large: null, price: 170, hasImages: false },
      { name: 'Rose Tres Leches', slug: null, pastry: null, small: null, large: null, price: 170, hasImages: false },
    ]
  },
  {
    id: 'chocolates',
    name: 'Chocolates',
    description: 'Handcrafted chocolates & gift hampers',
    icon: 'Candy',
    items: [
      { name: 'Chocolate Box (150 grams)', slug: null, pastry: null, small: null, large: null, price: 300, hasImages: false },
      { name: 'Chocolate Box (250 grams)', slug: null, pastry: null, small: null, large: null, price: 500, hasImages: false },
      { name: 'Assorted Chocolates (Per Piece)', slug: null, pastry: null, small: null, large: null, price: 20, hasImages: false },
      { name: 'Chocolate Bouquet', slug: null, pastry: null, small: null, large: null, price: 450, hasImages: false },
      { name: 'Hamper 1', slug: null, pastry: null, small: null, large: null, price: 550, hasImages: false },
      { name: 'Hamper 2', slug: null, pastry: null, small: null, large: null, price: 650, hasImages: false },
      { name: 'Hamper 3', slug: null, pastry: null, small: null, large: null, price: 1000, hasImages: false },
      { name: 'Hamper 4', slug: null, pastry: null, small: null, large: null, price: 1500, hasImages: false },
      { name: 'Hamper 5', slug: null, pastry: null, small: null, large: null, price: 2000, hasImages: false },
    ]
  },
  {
    id: 'Cookies',
    name: 'Cookies',
    description: 'Crunchy, buttery Cookie selection',
    icon: 'Cookie',
    items: [
      { name: 'Fruit Cookies', slug: null, weight: '350g', price: 180, hasImages: false },
      { name: 'Kesar Badaam Pista', slug: null, weight: '350g', price: 255, hasImages: false },
      { name: 'Plain Kaju', slug: null, weight: '350g', price: 220, hasImages: false },
      { name: 'Chocolate Kaju', slug: null, weight: '350g', price: 260, hasImages: false },
      { name: 'Osmania', slug: null, weight: '300g', price: 150, hasImages: false },
      { name: 'Moon Cookies', slug: null, weight: '350g', price: 135, hasImages: false },
      { name: 'Ajwain Cookies', slug: null, weight: '300g', price: 135, hasImages: false },
      { name: 'Coconut Cookies', slug: null, weight: '300g', price: 150, hasImages: false },
    ]
  },
  {
    id: 'breads',
    name: 'Breads',
    description: 'Freshly baked breads daily',
    icon: 'Wheat',
    items: [
      { name: 'White Bread', slug: null, weight: '400g', price: 45, hasImages: false },
      { name: 'Brown Bread', slug: null, weight: '400g', price: 50, hasImages: false },
      { name: 'Multigrain Bread', slug: null, weight: '400g', price: 70, hasImages: false },
      { name: 'Jumbo Bread', slug: null, weight: '600g', price: 120, hasImages: false },
      { name: 'Burger Bun', slug: null, weight: '2Pc', price: 50, hasImages: false },
      { name: 'Hot Dog', slug: null, weight: '2Pc', price: 50, hasImages: false },
      { name: 'Pizza Base', slug: null, weight: '2Pc', price: 60, hasImages: false },
      { name: 'Pav Bun', slug: null, weight: '6 Pc', price: 50, hasImages: false },
      { name: 'Whole Wheat Pizza Base', slug: null, weight: '2Pc', price: 70, hasImages: false },
      { name: 'Focaccia', slug: null, weight: '200g', price: 60, hasImages: false },
    ]
  },
  {
    id: 'tea-time-cakes',
    name: 'Tea-time Cakes',
    description: 'Perfect companions for your tea',
    icon: 'Coffee',
    items: [
      { name: 'Mawa Cake', slug: null, weight: '150g', price: 80, hasImages: false },
      { name: 'Chocochips Cake', slug: null, weight: '250g', price: 90, hasImages: false },
      { name: 'Fruit Cake', slug: null, weight: '250g', price: 150, hasImages: false },
      { name: 'Marble Cake', slug: null, weight: '250g', price: 150, hasImages: false },
      { name: 'Plum Cake', slug: null, weight: '250g', price: 150, hasImages: false },
      { name: 'Walnut Banana Cake', slug: null, weight: '300g', price: 160, hasImages: false },
    ]
  },
  {
    id: 'tidbits',
    name: 'Tidbits',
    description: 'Savoury snacks & munchies',
    icon: 'Pizza',
    items: [
      { name: 'Butter Toast', slug: null, weight: '200g', price: 90, hasImages: false },
      { name: 'Twisted Khari', slug: null, weight: '200g', price: 90, hasImages: false },
      { name: 'Butter Sticks', slug: null, weight: '200g', price: 90, hasImages: false },
      { name: 'Methi Khari', slug: null, weight: '200g', price: 90, hasImages: false },
      { name: 'Palmiers', slug: null, weight: '200g', price: 90, hasImages: false },
      { name: 'Cashew Cookies', slug: null, weight: '200g', price: 170, hasImages: false },
      { name: 'Multigrain Rusk', slug: null, weight: '250g', price: 100, hasImages: false },
    ]
  },
];

// Additional cakes that have images but belong to special collections
export const additionalCakesWithImages = [
  { name: 'Choco Cream', slug: 'choco-cream', hasImages: true },
  { name: 'White Willow', slug: 'white-willow', hasImages: true },
  { name: 'Magic Moment', slug: 'magic-moment', hasImages: true },
  { name: 'Oreo Chocolate', slug: 'oreo-chocolate', hasImages: true },
  { name: 'Honey Almond', slug: 'honey-almond', hasImages: true },
];

// Bestsellers for homepage feature
export const bestsellers = [
  'black-forest', 'red-velvet', 'belgium-chocolate', 
  'ferrero-rocher', 'butterscotch', 'tiramisu',
  'rasmalai', 'choco-praline'
];

// Helper to get image paths for a cake
export function getCakeImages(slug) {
  if (!slug) return ['/images/cakes/placeholder.jpg'];
  return [
    `/images/cakes/${slug}/1.png`,
    `/images/cakes/${slug}/2.png`,
    `/images/cakes/${slug}/3.png`,
  ];
}

// Helper to format price
export function formatPrice(price) {
  if (!price) return null;
  return `₹${price}`;
}

// Get all items with images for the gallery
export function getAllItemsWithImages() {
  const items = [];
  categories.forEach(cat => {
    cat.items.forEach(item => {
      if (item.hasImages && item.slug) {
        items.push({ ...item, category: cat.name, categoryId: cat.id });
      }
    });
  });
  additionalCakesWithImages.forEach(item => {
    items.push({ ...item, category: 'Special Collection', categoryId: 'special' });
  });
  return items;
}
