// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const categories = ["Beauty", "Women", "Men", "Baby"];

// export default function CategoryTabs() {
//   const pathname = usePathname();
//   const active = pathname.split("/")[1];

//   return (
//     <section className="w-full py-4 bg-white border-b border-neutral-200">
//       <div className="flex gap-3 px-4 overflow-x-auto scrollbar-none whitespace-nowrap">
//         {categories.map((cat) => {
//           const slug = cat.toLowerCase();
//           const isActive = slug === active;

//           return (
//             <Link
//               key={cat}
//               href={`/${slug}`}
//               className={`px-5 py-2 rounded-full text-xs sm:text-sm uppercase font-medium border transition-all
//                 ${
//                   isActive
//                     ? "bg-neutral-900 text-white border-neutral-900"
//                     : "border-neutral-800 text-neutral-800 hover:bg-neutral-900 hover:text-white"
//                 }
//               `}
//             >
//               {cat}
//             </Link>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// 

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = ["beauty", "women", "men", "baby"];

export default function CategoryTabs() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex gap-4 overflow-x-auto py-4 px-4 border-b">
      {categories.map((cat) => {
        const active = pathname.toLowerCase().includes(cat);
        return (
          <Link
            key={cat}
            href={`/${cat}`}
            className={`text-lg tracking-wide ${
              active ? "font-semibold" : "opacity-50"
            }`}
          >
            {cat.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
