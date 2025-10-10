import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductGrid from "./components/ProductGrid";
import ShopFooter from "./components/ShopFooter";

export const metadata: Metadata = {
  title: "Trndz Pro | Modern Finds for Everyday Living",
  description:
    "An editorial edit of Amazon finds   bold, refined, and timeless essentials curated with a design-first aesthetic.",
};

export default function HomePage() {
  const categories = ["Beauty", "Women", "Men", "Baby"];

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden selection:bg-neutral-900 selection:text-white">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-neutral-900 text-white overflow-hidden">
        {/* Background giant text */}
        <h1 className="absolute inset-0 flex justify-center items-center text-[32vw] sm:text-[24vw] md:text-[18vw] font-extrabold text-neutral-800 leading-none tracking-tighter select-none">
          TRNDZ
        </h1>

        {/* Foreground content */}
        <div className="relative z-10">
          <Image
            src="/logo.png"
            alt="Trndz Pro Logo"
            width={130}
            height={130}
            className="mx-auto mb-10 opacity-90"
          />
          <h2 className="text-[10vw] sm:text-[7vw] md:text-[6vw] font-extrabold uppercase tracking-tight leading-[0.9] max-w-5xl mx-auto">
            Modern Finds for Everyday Living
          </h2>
          <p className="mt-8 text-neutral-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Editorially curated Amazon picks that merge utility, form, and
            emotion   designed to live beautifully in the everyday.
          </p>
          <Link
            href="#featured"
            className="inline-block mt-10 border border-white px-10 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore
          </Link>
        </div>

        <p className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.25em] text-neutral-500">
          curated by trndz.pro
        </p>
      </section>

      {/* CATEGORY SECTION */}
      <section className="relative w-full py-28 bg-white border-t border-neutral-200">
        {/* Large translucent text in background */}
        <h3 className="absolute text-[26vw] sm:text-[18vw] md:text-[12vw] font-extrabold text-neutral-100 leading-none tracking-tighter top-1/2 -translate-y-1/2 left-0 w-full text-center select-none pointer-events-none">
          CATEGORIES
        </h3>

        <div className="relative z-10 flex flex-wrap justify-center gap-4 px-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className="text-sm sm:text-base uppercase tracking-widest border border-neutral-800 px-8 py-3 rounded-full bg-transparent hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section
        id="featured"
        className="relative w-full py-28 bg-neutral-50 flex flex-col items-center overflow-hidden"
      >
        <h3 className="absolute text-[26vw] sm:text-[18vw] md:text-[12vw] font-extrabold text-neutral-100 leading-none tracking-tighter top-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none">
          FEATURED
        </h3>

        <div className="relative z-10 text-center mb-14 px-8">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 text-neutral-900">
            Featured Collection
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Each product is a visual and tactile experience   modern,
            functional, and designed to last.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl w-full px-4">
          <ProductGrid featured />
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="w-full text-center px-8 py-28 bg-neutral-900 text-white">
        <h3 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-8 leading-[0.95]">
          The Art of Everyday
        </h3>
        <p className="text-neutral-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          At Trndz Pro, design is a statement of intent   a belief that simplicity 
          and impact can coexist in everything we use and wear.
        </p>
        <a
          href="https://www.instagram.com/trndz.pro"
          target="_blank"
          className="inline-block border border-white px-12 py-3 text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          Follow @trndz.pro
        </a>
      </section>

      {/* FOOTER */}
      <ShopFooter />
    </main>
  );
}
