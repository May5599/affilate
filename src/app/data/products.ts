export interface Product {
  name: string;
  image: string;
  link: string;
  desc: string;
  category: "baby" | "women" | "men" | "beauty";
  featured?: boolean;
}

export const products: Product[] = [
  // 🌸 BEAUTY
  {
    name: "Neutrogena Hydro Boost Gel Cream Face Moisturizer",
    image: "/hydroboost.jpg",
    link: "https://amzn.to/4mSdPxP",
    desc: "Hydrating gel-cream infused with hyaluronic acid for dewy, smooth, and glowing skin all day.",
    category: "beauty",
    featured: true,
  },
  {
    name: "CeraVe Face Cream BUNDLE",
    image: "/cerave-bundle.jpg",
    link: "https://amzn.to/4odMO9i",
    desc: "A gentle face care duo enriched with ceramides and niacinamide to keep your skin barrier strong and hydrated.",
    category: "beauty",
  },
  {
    name: "THE ORDINARY 2 Packs of Hyaluronic Acid 2% + B5 30ml",
    image: "/theordinary.jpg",
    link: "https://amzn.to/4h5R6gp",
    desc: "Two-pack of cult-favorite hydrating serum that leaves skin soft, plump, and refreshed.",
    category: "beauty",
  },

  // 👩‍🦰 WOMEN
  {
    name: "Oyamiki Oversized Cropped Zip Up Hoodie for Women",
    image: "/oyamiki-hoodie.jpg",
    link: "https://amzn.to/3KGpanv",
    desc: "Trendy oversized cropped hoodie   soft, comfy, and perfect for cozy streetwear looks.",
    category: "women",
    featured: true,
  },
  {
    name: "Women's 2025 Knit Cardigan Sweater Crew Neck",
    image: "/knit-cardigan.jpg",
    link: "https://amzn.to/46VR87v",
    desc: "Classic knit cardigan with a soft texture and timeless style   made for layering through every season.",
    category: "women",
  },
  {
    name: "Women’s Casual Long Sleeve Half Zip Pullover",
    image: "/halfzip-pullover.jpg",
    link: "https://amzn.to/3VZQPlO",
    desc: "Relaxed-fit pullover with a half-zip neckline, perfect for a cozy morning coffee or chilly stroll.",
    category: "women",
  },
  {
    name: "Cardigan for Women Open Front Button Down",
    image: "/openfront-cardigan.jpg",
    link: "https://amzn.to/4oieZUH",
    desc: "Open-front button-down cardigan   chic, breathable, and effortlessly elegant for any outfit.",
    category: "women",
  },

  // 👞 MEN
  {
    name: "Hanes Men’s Ultimate Cotton Heavyweight Pullover Hoodie",
    image: "/hanes-hoodie.jpg",
    link: "https://amzn.to/3J8uiQJ",
    desc: "Classic heavyweight pullover built for warmth and durability   a wardrobe essential for every season.",
    category: "men",
    featured: true,
  },
  {
    name: "Men's Hoodie Winter Full Zip Heavyweight",
    image: "/mens-ziphoodie.jpg",
    link: "https://amzn.to/42CXO7L",
    desc: "Full-zip heavyweight hoodie designed for ultimate comfort and warmth during colder months.",
    category: "men",
  },
  {
    name: "MrLin Black Hoodie for Men Tactical Sweatshirt",
    image: "/mrlin-hoodie.jpg",
    link: "https://amzn.to/3KIk61T",
    desc: "Tactical black hoodie with sleek design and durable fabric   built for both style and function.",
    category: "men",
  },

  // 🧣 BABY
  {
    name: "Toddler Beanie / Winter Cap",
    image: "/beanie.png",
    link: "https://amzn.to/3VY5wpq",
    desc: "Soft and skin-friendly winter cap that keeps your baby warm and cozy.",
    category: "baby",
    featured: true,
  },
  {
    name: "Baby Boy Corduroy Jacket (Fleece Winter)",
    image: "/jacket.jpg",
    link: "https://amzn.to/3WuIs1D",
    desc: "Fleece-lined corduroy jacket that feels comfy and looks stylish for little explorers.",
    category: "baby",
  },
  {
    name: "Warm Booties (Newborn Cozy Fur Shoes)",
    image: "/booties.jpg",
    link: "https://amzn.to/46Y2Lt9",
    desc: "Fur-lined baby booties that keep tiny toes snug and warm all day.",
    category: "baby",
  },
];
