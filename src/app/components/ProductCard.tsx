"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="flex flex-col justify-between items-center 
      bg-white rounded-2xl shadow-md hover:shadow-lg 
      transition-all duration-300 border border-gray-100 
      p-4 sm:p-5 text-center h-full w-full
      min-h-[360px] sm:min-h-[380px] md:min-h-[400px]"
    >
      {/* Image container with fixed aspect ratio */}
      <div className="w-full aspect-square overflow-hidden rounded-xl mb-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product info */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-snug mb-1">
            {product.name}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {product.desc}
          </p>
        </div>

        {/* Button */}
        <Link
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-gray-900 text-white px-4 py-2 
          rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 
          transition-all"
        >
          Shop on Amazon
        </Link>
      </div>
    </div>
  );
}
