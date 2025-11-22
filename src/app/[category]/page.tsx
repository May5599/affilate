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
    <main className="bg-neutral-50 text-neutral-900 min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white">

      {/* ========================= HERO ========================= */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-center items-center text-center px-5 bg-neutral-900 text-white">

        {/* Background text */}
        <h1 className="absolute inset-0 flex justify-center items-center text-[32vw] font-extrabold text-neutral-800/40 tracking-tight uppercase select-none">
          {title}
        </h1>

        {/* Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 to-neutral-900/90" />

        {/* Foreground */}
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="Trndz Pro"
            width={100}
            height={100}
            className="mb-6 opacity-90"
          />

          <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2">
            Trndz Pro Collection
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase leading-tight mb-4">
            {title} Collection
          </h2>

          <p className="max-w-xs sm:max-w-md text-neutral-300 text-sm sm:text-base leading-relaxed">
            Curated Amazon finds chosen for minimalism, function, and clean daily living.
          </p>
        </div>

        {/* Back */}
        <Link
          href="/"
          className="absolute top-5 left-5 flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </section>

      {/* ========================= CATEGORY NAV ========================= */}
      <section className="w-full py-4 bg-white border-b border-neutral-200">
        {/* Scrollable pill navigation for mobile */}
        <div className="flex gap-3 px-4 overflow-x-auto scrollbar-none whitespace-nowrap">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm uppercase font-medium border transition-all ${
                cat.toLowerCase() === category.toLowerCase()
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "border-neutral-800 text-neutral-800 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= PRODUCTS ========================= */}
      <section className="relative w-full max-w-6xl mx-auto py-14 px-5">

        {/* Background text */}
        <h3 className="absolute text-[32vw] font-extrabold text-neutral-100 tracking-tight top-[45%] -translate-y-1/2 w-full text-center uppercase pointer-events-none select-none">
          {title}
        </h3>

        {/* Heading */}
        <div className="relative z-10 text-center mb-10">
          <h3 className="text-3xl sm:text-5xl font-bold text-neutral-900 mb-3">
            {title} Essentials
          </h3>
          <p className="text-neutral-500 text-sm sm:text-base max-w-xs sm:max-w-md mx-auto leading-relaxed">
            Hand selected modern products created for balance, beauty, and purpose.
          </p>
        </div>

        {/* Product grid */}
        <div className="relative z-10">
          <ProductGrid category={category} />
        </div>
      </section>

      <ShopFooter />

      {/* ========================= MOBILE QUICK BACK BUTTON ========================= */}
      <Link
        href="/"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-8 py-3 rounded-full text-sm font-medium shadow-xl hover:bg-black transition-all z-50"
      >
        Back to Home
      </Link>
    </main>
  );
}
