import Image from "next/image";

export default function ShopHeader() {
  return (
    <header className="flex flex-col items-center mb-10">
      <Image
        src="/logo.png"
        alt="Cozy Finds Logo"
        width={100}
        height={100}
        className="mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
        Cozy Amazon Picks
      </h1>
      <p className="text-gray-600 text-lg max-w-lg text-center">
        Handpicked finds   beauty, fashion, and cozy lifestyle favorites.
      </p>
    </header>
  );
}
