import ProductCard from "./ProductCard";
import { products } from "../data/products";

interface Props {
  category?: string;
  featured?: boolean;
}

export default function ProductGrid({ category, featured }: Props) {
  let filtered = products;

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (featured) {
    filtered = filtered.filter((p) => p.featured);
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4

        gap-6 sm:gap-8 md:gap-10
        max-w-7xl w-full mx-auto
        px-4 sm:px-6 md:px-8

        items-start               /* ⭐ Prevents overlap */
      "
    >
      {filtered.map((p) => (
        <div
          key={p.name}
          className="
            bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow
            overflow-hidden flex flex-col

            /* ⭐ Make cards wider safely */
            max-w-[360px] mx-auto   /* Perfect width control */
            w-full                  /* let grid auto-adjust */
          "
        >
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
