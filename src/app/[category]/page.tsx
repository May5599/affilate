import ProductGrid from "../components/ProductGrid";
import ShopFooter from "../components/ShopFooter";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const title =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

  const categories = ["Beauty", "Women", "Men", "Baby"];

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 flex flex-col items-center overflow-hidden selection:bg-neutral-900 selection:text-white">
      {/* ========================= HERO SECTION ========================= */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-neutral-900 text-white overflow-hidden">
        {/* Background giant title */}
        <h1 className="absolute inset-0 flex justify-center items-center text-[30vw] sm:text-[22vw] md:text-[16vw] font-extrabold text-neutral-800 leading-none tracking-tighter select-none uppercase">
          {title}
        </h1>

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Trndz Pro Logo"
            width={120}
            height={120}
            className="mx-auto mb-8 opacity-90"
          />
          <p className="text-xs uppercase tracking-[0.25em] mb-4 text-neutral-400">
            Trndz Pro Collection
          </p>
          <h2 className="text-[9vw] sm:text-[6vw] md:text-[5vw] font-extrabold uppercase tracking-tight leading-[0.95] mb-6">
            {title} Collection
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg leading-relaxed">
            A refined selection of Amazon finds   minimalist, functional, and
            built for modern living.
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-neutral-400 hover:text-white transition-all text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
      </section>

      {/* ========================= CATEGORY NAVIGATION ========================= */}
      <section className="relative w-full py-12 border-b border-neutral-200 bg-white">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-medium border border-neutral-800 transition-all duration-300 ${
                cat.toLowerCase() === category.toLowerCase()
                  ? "bg-neutral-900 text-white"
                  : "hover:bg-neutral-900 hover:text-white text-neutral-800"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= PRODUCT GRID SECTION ========================= */}
      <section className="relative z-10 w-full max-w-7xl py-24 px-6">
        {/* Background faded title for depth */}
        <h3 className="absolute text-[26vw] sm:text-[18vw] md:text-[12vw] font-extrabold text-neutral-100 leading-none tracking-tighter top-[55%] -translate-y-1/2 w-full text-center select-none pointer-events-none uppercase">
          {title}
        </h3>

        {/* Section Heading */}
        <div className="relative z-10 text-center mb-14">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-900 mb-3">
            {title} Essentials
          </h3>
          <p className="text-neutral-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Explore timeless, design-forward products that balance beauty and
            purpose   all curated for effortless living.
          </p>
        </div>

        <div className="relative z-10">
          <ProductGrid category={category} />
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <ShopFooter />

      {/* ========================= STICKY MOBILE BUTTON ========================= */}
      <Link
        href="/"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-8 py-3 rounded-full text-sm font-medium shadow-lg hover:bg-black transition-all z-50"
      >
        Back to Home
      </Link>
    </main>
  );
}
