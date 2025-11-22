export default function ShopFooter() {
  return (
    <footer className="w-full mt-20 px-6 pb-10 text-center text-neutral-500">
      
      {/* Logo or brand text */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-sm font-semibold tracking-wide text-neutral-700">
          TRNDZ PRO
        </p>
        <div className="w-10 h-[2px] bg-neutral-300 mt-2"></div>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-xs mb-6 text-neutral-600">
      
      </div>

      {/* Affiliate note */}
      <p className="text-xs leading-relaxed max-w-xs mx-auto text-neutral-500">
        This site includes Amazon affiliate links.  
        Purchases made through these links support the work at no extra cost to you.
      </p>

      {/* Bottom copyright */}
      <p className="text-[11px] mt-6 text-neutral-400">
        © {new Date().getFullYear()} Trndz Pro. All rights reserved.
      </p>
    </footer>
  );
}
