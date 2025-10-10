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
    <div className="grid 
      grid-cols-2               /* ✅ 2 columns on mobile */
      sm:grid-cols-2            /* ✅ still 2 on small screens */
      md:grid-cols-3            /* ✅ 3 on medium devices */
      lg:grid-cols-4            /* ✅ 4 on desktops */
      gap-4 sm:gap-6 md:gap-8 
      max-w-7xl w-full px-2 sm:px-4 md:px-6
      place-items-center">
      {filtered.map((p) => (
        <ProductCard key={p.name} product={p} />
      ))}
    </div>
  );
}
