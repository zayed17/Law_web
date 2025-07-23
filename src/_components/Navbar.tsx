// components/Navbar.tsx
import { ShoppingCart, Search, ChevronDown, Languages } from "lucide-react";

export default function Navbar() {
  return (
    <section  className="w-full bg-DarkGreen text-white py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-left leading-tight font-bold text-white">
        <p className="text-lg">AM Advocates and</p>
        <p className="text-lg">Legal Consultations</p>
      </div>

      {/* Center: Navigation */}
      <div className="hidden lg:flex gap-6 text-white font-semibold text-[17px]">
        {[
          "Home",
          "Pages",
          "Practices",
          "Case Studies",
          "Shop",
          "Blog",
          "Contact",
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-1 ${
              item === "Practices" ? "text-yellow-400" : ""
            }`}
          >
            <span className="font-bold">+</span> {item}
          </a>
        ))}
      </div>

      {/* Right: Icons and Button */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#3a4b4b] flex items-center justify-center">
          <ShoppingCart className="text-white w-6 h-6" />
        </div>

        <div className="w-12 h-12 rounded-full bg-[#3a4b4b] flex items-center justify-center">
          <Search className="text-white w-6 h-6" />
        </div>

        <div className="flex items-center gap-1 text-blue-500 cursor-pointer text-sm underline">
          <Languages className="w-4 h-4" />
          <ChevronDown className="w-3 h-3" />
        </div>

        <button className="bg-[#562C26] text-white px-6 py-3 rounded-xl text-lg font-bold flex items-center gap-2">
          ابدأ الآن <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
}
