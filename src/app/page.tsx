import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ProductGrid from "./components/ProductGrid";
import ShopFooter from "./components/ShopFooter";
import PromoPopup from "./components/PromoPopup";

export const metadata: Metadata = {
  title: "Trndz Pro | Modern Finds for Everyday Living",
  description:
    "Editorial Amazon finds curated for modern simplicity, utility, and daily lifestyle.",
};

export default function HomePage() {
  const categories = ["Beauty", "Women", "Men", "Baby"];

  return (
    <main className="bg-neutral-50 text-neutral-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center text-center px-6 bg-neutral-900 text-white overflow-hidden">
        
        {/* Background Word */}
        <h1 className="absolute inset-0 flex justify-center items-center
          text-[45vw] sm:text-[32vw] md:text-[22vw] lg:text-[18vw]
          font-extrabold text-neutral-800/30 tracking-tighter select-none pointer-events-none">
          TRNDZ
        </h1>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 via-neutral-900/70 to-neutral-900/95" />

        {/* Foreground */}
        <div className="relative z-10 max-w-xl mx-auto">
          <Image
            src="/logo.png"
            alt="Trndz Pro Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 opacity-90"
          />

          <p className="uppercase text-[10px] tracking-[0.35em] text-neutral-400 mb-3">
            Curated Amazon Finds
          </p>

          <h2 className="text-[12vw] sm:text-6xl font-extrabold uppercase leading-[0.85] tracking-tight mb-4">
            Modern Finds For Everyday Living
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-sm mx-auto mb-8">
            Simple, intentional pieces chosen to enhance your daily rituals and bring beauty into the everyday.
          </p>

          <Link
            href="#featured"
            className="block w-full sm:w-auto mx-auto border border-white px-10 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
          >
            Explore Collection
          </Link>
        </div>

        <p className="absolute bottom-6 right-6 text-[9px] tracking-wider text-neutral-500 select-none">
          curated by trndz.pro
        </p>
      </section>


      {/* ================= ONE BIG BACKGROUND WORD (DISCOVER) ================= */}
<div className="relative w-full pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">

  <h2
    className="
      absolute inset-0 flex justify-center items-center
      font-extrabold text-neutral-200 tracking-tight select-none pointer-events-none
      text-[80vw]      /* small screens */
      sm:text-[60vw]   /* tablets */
      md:text-[40vw]   /* desktops */
      lg:text-[28vw]   /* large screens */
    "
    style={{ lineHeight: 0.8 }}
  >
    DISCOVER
  </h2>

  {/* CATEGORY BUTTONS */}
  <div className="relative z-10 flex flex-col sm:flex-row sm:justify-center gap-4 px-6 max-w-3xl mx-auto mb-16">
    {categories.map((cat) => (
      <Link
        key={cat}
        href={`/${cat.toLowerCase()}`}
        className="flex items-center justify-center
        h-14 sm:h-16 px-8 bg-neutral-900 text-white rounded-full
        text-sm sm:text-base font-semibold tracking-wide shadow-sm active:scale-[0.98] transition"
      >
        {cat}
      </Link>
    ))}
  </div>

  {/* FEATURED HEADING */}
  <div className="relative z-10 text-center mt-8 px-6">
    <h2 id="featured" className="text-4xl sm:text-6xl font-bold mb-3 tracking-tight">
      Featured Collection
    </h2>
    <p className="text-neutral-500 text-base max-w-md mx-auto leading-relaxed">
      Modern pieces curated for a clean, elevated daily experience.
    </p>
  </div>
</div>



      {/* ================= PRODUCT GRID ================= */}
      <section className="relative w-full pb-24 bg-neutral-50">
        <div className="relative z-10 max-w-6xl mx-auto px-3">
          <ProductGrid featured />
        </div>
      </section>


      {/* ================= BRAND ================= */}
      <section className="w-full text-center px-6 py-20 bg-neutral-900 text-white">
        <h3 className="text-4xl sm:text-6xl font-extrabold mb-5 leading-tight tracking-tight">
          The Art of Everyday
        </h3>
        <p className="text-neutral-300 max-w-md mx-auto text-base leading-relaxed mb-10">
          At Trndz Pro, design is a choice that blends simplicity and quiet presence into what you use daily.
        </p>
        <a
          href="https://www.instagram.com/trndz.pro"
          target="_blank"
          className="inline-block border border-white px-10 py-3 text-sm uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition"
        >
          Follow @trndz.pro
        </a>
      </section>

      <PromoPopup />
      <ShopFooter />
    </main>
  );
}
