import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cozy Baby Winter Essentials ❄️ | Adorable Amazon Baby Finds",
  description:
    "Discover cozy baby winter essentials like soft beanies, warm jackets, and fur booties. Handpicked Amazon favorites to keep your baby comfortable and stylish all season.",
  openGraph: {
    title: "Cozy Baby Winter Essentials ❄️",
    description:
      "Shop the best cozy baby winter finds that are warm, soft, and adorable must-haves.",
    url: "https://cozy-shop.vercel.app/shop",
    siteName: "Cozy Baby Finds",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cozy Baby Winter Essentials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

interface Product {
  name: string;
  image: string;
  link: string;
  desc: string;
  emoji: string;
}

export default function ShopPage() {
  const products: Product[] = [
    {
      name: "Toddler Beanie / Winter Cap",
      image: "/beanie.png",
      link: "https://amzn.to/3VY5wpq",
      desc: "Soft and skin-friendly winter cap that keeps your baby warm and cozy.",
      emoji: "🧣",
    },
    {
      name: "Baby Boy Corduroy Jacket (Fleece Winter)",
      image: "/jacket.jpg",
      link: "https://amzn.to/3WuIs1D",
      desc: "Fleece-lined corduroy jacket for your little one that feels comfy and looks stylish.",
      emoji: "🧥",
    },
    {
      name: "Warm Booties (Newborn Cozy Fur Shoes)",
      image: "/booties.jpg",
      link: "https://amzn.to/46Y2Lt9",
      desc: "Fur-lined baby booties that keep those tiny toes snug and warm all day.",
      emoji: "👢",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white to-rose-50 flex flex-col items-center py-16 px-6">
      {/* Header / Logo */}
      <header className="flex flex-col items-center mb-10">
        <Image
          src="/logo.png"
          alt="Cozy Baby Finds Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
          Cozy Baby Winter Picks 
        </h1>
        <p className="text-gray-600 text-lg max-w-lg text-center">
          Handpicked winter essentials for your baby   warm, soft, and adorable.
        </p>
      </header>

      {/* Highlight Banner */}
      <div className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
        💛 Trending Baby Winter Must-Haves (Amazon Favorites 2025)
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100"
          >
            <div className="w-full h-64 flex items-center justify-center mb-5 overflow-hidden rounded-2xl">
              <Image
                src={p.image}
                alt={p.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {p.emoji} {p.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2 mb-5 leading-relaxed">
              {p.desc}
            </p>
            <Link
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all"
            >
              Shop on Amazon
            </Link>
          </div>
        ))}
      </div>

      {/* Instagram Mention */}
      <section className="text-center mt-12">
        <p className="text-sm text-gray-500">
          🌸 As seen on{" "}
          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            className="text-pink-600 font-medium"
          >
            @yourhandle
          </a>{" "}
            daily cozy baby finds and mom tips
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-xs text-gray-400 text-center max-w-md">
        © 2025 Cozy Baby Finds. This page contains Amazon affiliate links. I may
        earn a small commission if you shop through them 💛
      </footer>

      {/* Sticky CTA Button */}
      {/* <Link
        href="https://www.amazon.com/shop/yourstore"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-500 transition-all text-sm z-50"
      >
        🛍️ Shop My Full Amazon List
      </Link> */}
    </main>
  );
}
