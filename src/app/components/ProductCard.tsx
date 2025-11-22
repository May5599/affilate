"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="
        w-full
        bg-white 
        rounded-xl 
        border border-neutral-200 
        shadow-sm 
        hover:shadow-md 
        transition 
        flex flex-col
        p-3
      "
    >

      {/* Image with better ratio for mobile */}
      <div className="w-full aspect-[4/5] overflow-hidden rounded-lg mb-3">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text section */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-sm font-semibold text-neutral-800 leading-snug mb-1 line-clamp-2 text-left">
          {product.name}
        </h2>

        <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 text-left mb-3">
          {product.desc}
        </p>

        {/* CTA */}
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-auto 
            w-full 
            bg-neutral-900 
            text-white 
            rounded-full 
            text-xs 
            py-2 
            text-center
            font-medium
            hover:bg-black 
            active:scale-[0.97]
            transition
          "
        >
          Shop on Amazon
        </Link>
      </div>
    </div>
  );
}
