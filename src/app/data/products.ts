export interface Product {
  name: string;
  image: string;
  link: string;
  desc: string;
  category: "baby" | "women" | "men" | "beauty";
  featured?: boolean;
}

export const products: Product[] = [
  // 🌸 BEAUTY (same for now – give me Geniuslinks later)
  {
    name: "Neutrogena Hydro Boost Gel Cream Face Moisturizer",
    image: "/hydroboost.jpg",
    link: "", // waiting for its geni.us link
    desc: "Hydrating gel-cream infused with hyaluronic acid for dewy, smooth, and glowing skin all day.",
    category: "beauty",
    featured: true,
  },
  {
    name: "CeraVe Face Cream BUNDLE",
    image: "/cerave-bundle.jpg",
    link: "", // waiting for its geni.us link
    desc: "Gentle face care duo enriched with ceramides and niacinamide to keep your skin barrier strong.",
    category: "beauty",
  },
  {
    name: "THE ORDINARY 2 Packs of Hyaluronic Acid 2% + B5",
    image: "/theordinary.jpg",
    link: "", // waiting for its geni.us link
    desc: "Two-pack of cult-favorite hydrating serum that leaves skin soft, plump, and refreshed.",
    category: "beauty",
  },

  // 👩‍🦰 WOMEN
  {
    name: "Oyamiki Oversized Cropped Zip Up Hoodie for Women",
    image: "/oyamiki-hoodie.jpg",
    link: "https://geni.us/VYGdTij",
    desc: "Trendy oversized cropped hoodie soft, comfy, and perfect for cozy streetwear looks.",
    category: "women",
    featured: true,
  },
  {
    name: "Women's 2025 Knit Cardigan Sweater Crew Neck",
    image: "/knit-cardigan.jpg",
    link: "https://geni.us/aPrx",
    desc: "Classic knit cardigan with a soft texture and timeless style made for layering through every season.",
    category: "women",
  },
  {
    name: "Women’s Casual Long Sleeve Half Zip Pullover",
    image: "/halfzip-pullover.jpg",
    link: "https://geni.us/HkLnp",
    desc: "Relaxed-fit pullover with a half-zip neckline.",
    category: "women",
  },
  {
    name: "Cardigan for Women Open Front Button Down",
    image: "/openfront-cardigan.jpg",
    link: "https://geni.us/7qy9j",
    desc: "Chic open-front cardigan that is breathable and effortless for any outfit.",
    category: "women",
  },

  // 👞 MEN
  {
    name: "Hanes Men’s Ultimate Cotton Heavyweight Pullover Hoodie",
    image: "/hanes-hoodie.jpg",
    link: "https://geni.us/U1JroB",
    desc: "Classic heavyweight pullover built for warmth and durability.",
    category: "men",
    featured: true,
  },
  {
    name: "Men's Hoodie Winter Full Zip Heavyweight",
    image: "/mens-ziphoodie.jpg",
    link: "https://geni.us/yJQy",
    desc: "Full-zip heavyweight hoodie designed for ultimate comfort and warmth.",
    category: "men",
  },
  {
    name: "MrLin Black Hoodie for Men Tactical Sweatshirt",
    image: "/mrlin-hoodie.jpg",
    link: "https://geni.us/0Bfw",
    desc: "Tactical hoodie with sleek design and durable fabric.",
    category: "men",
  },

  // 🧣 BABY
  {
    name: "Toddler Beanie / Winter Cap",
    image: "/beanie.png",
    link: "https://geni.us/gK3s7b",
    desc: "Soft and skin-friendly winter cap that keeps your baby warm.",
    category: "baby",
    featured: true,
  },
  {
    name: "Baby Boy Corduroy Jacket (Fleece Winter)",
    image: "/jacket.jpg",
    link: "https://geni.us/5fPpzBK",
    desc: "Fleece-lined corduroy jacket comfy and stylish.",
    category: "baby",
  },
  {
    name: "Warm Booties (Newborn Cozy Fur Shoes)",
    image: "/booties.jpg",
    link: "https://geni.us/aV9I",
    desc: "Fur-lined booties that keep tiny toes warm.",
    category: "baby",
  },
];
