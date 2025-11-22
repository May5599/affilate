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
        grid-cols-2 
        gap-5                    /* ⭐ More breathing room on mobile */
        sm:gap-6 
        md:grid-cols-3 
        lg:grid-cols-4 
        md:gap-8
        max-w-7xl 
        w-full 
        px-4                    /* ⭐ Wider padding on mobile */
        sm:px-6 
        md:px-8
        place-items-stretch     /* ⭐ Cards stretch instead of squeeze */
      "
    >
      {filtered.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </div>
  );
}
