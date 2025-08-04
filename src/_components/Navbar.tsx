"use client";
import { Search, Languages, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface NavigationItem {
  name: string;
  url: string;
  hasDropdown: boolean;
  items?: { name: string; url: string; }[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  const switchLanguage = (locale: "en" | "ar") => {
    const segments = pathname.split("/");
    if (segments[1] === "en" || segments[1] === "ar") {
      segments[1] = locale; // replace language
    } else {
      segments.splice(1, 0, locale); // insert locale if not present
    }
    const newPath = segments.join("/");
    router.push(newPath);
    setShowOptions(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  const navigationItems: NavigationItem[] = [
    { name: "Home", url: "/", hasDropdown: false },
    {
      name: "Pages",
      url: "#",
      hasDropdown: true,
      items: [
        { name: "About Us", url: "/about" },
        { name: "Testimonials", url: "/testimonials" },
        { name: "Appointment", url: "/appointment" },
        { name: "Pricing", url: "/pricing" },
        { name: "Gallery", url: "/gallery" },
        { name: "Attorneys", url: "/attorneys" },
        { name: "FAQ", url: "/faq" },
        { name: "My Account", url: "/account" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms and Conditions", url: "/terms" },
      ],
    },
    {
      name: "Practices",
      url: "#",
      hasDropdown: true,
      items: [
        { name: "Practice", url: "/practice" },
        { name: "Practice Details", url: "/practice/practice-details" },
      ],
    },
    {
      name: "Case Studies",
      url: "#",
      hasDropdown: true,
      items: [
        { name: "Case Study", url: "/case-study" },
        { name: "Case Study Details", url: "/case-study/case-study-details" },
      ],
    },
    {
      name: "Blog",
      url: "#",
      hasDropdown: true,
      items: [
        { name: "Recent Posts", url: "/blog/recent" },
        { name: "Legal News", url: "/blog/news" },
        { name: "Case Updates", url: "/blog/updates" },
        { name: "Legal Tips", url: "/blog/tips" },
        { name: "Industry Insights", url: "/blog/insights" },
      ],
    },
    { name: "Contact", url: "/contact-us", hasDropdown: false },
  ];

  return (
    <>
      <div className="h-20"></div>

      <section
        className={`
        w-full text-white py-4 fixed top-0 left-0 right-0 z-[1000] 
        bg-DarkGreen transition-all duration-300 ease-in-out
        ${isScrolled ? "shadow-lg" : ""}
      `}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-left leading-tight font-bold text-white">
            <p className="text-lg">AM Advocates and</p>
            <p className="text-lg">Legal Consultations</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 text-white font-semibold text-[15px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.url}
                  className="flex items-center gap-1 py-2 transition-colors duration-200 hover:text-yellow-400"
                >
                  {item.name !== "Home" && item.name !== "Contact" && (
                    <span className="font-bold">+</span>
                  )}
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 w-64 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 z-[1100] transition-all duration-300 transform ${
                      activeDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.url}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-DarkGreen transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-[#3a4b4b] hover:bg-[#2a3a3a]">
              <Search className="text-white w-6 h-6" />
            </div>

            {/* Language Selector */}
            <div className="relative">
              <div
                className="hidden md:flex items-center gap-1 text-blue-400 cursor-pointer text-sm underline hover:text-blue-300 transition-colors duration-200"
                onClick={() => setShowOptions(!showOptions)}
              >
                <Languages className="w-4 h-4" />
              </div>

              {showOptions && (
                <div className="absolute top-full mt-2 right-0 w-40 bg-DarkGreen shadow-lg border border-gray-600 rounded-md z-10">
                  <button
                    className="block px-4 py-3 w-full text-left text-white hover:bg-[#3a4b4b] transition-colors duration-150 border-b border-gray-600 first:rounded-t-md last:rounded-b-md last:border-b-0"
                    onClick={() => {
                      switchLanguage("en");
                      setShowOptions(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className="block px-4 py-3 w-full text-left text-white hover:bg-[#3a4b4b] transition-colors duration-150 border-b border-gray-600 first:rounded-t-md last:rounded-b-md last:border-b-0"
                    onClick={() => {
                      switchLanguage("ar");
                      setShowOptions(false);
                    }}
                  >
                    العربية (Arabic)
                  </button>
                </div>
              )}
            </div>

            {/* Get Started Button */}
            <button className="hidden sm:flex px-6 py-3 rounded-xl text-lg font-bold items-center gap-2 transition-all duration-300 bg-[#562C26] hover:bg-[#4a241f] text-white">
              Get Started
              <span className="text-xl">→</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full border-t border-gray-600 transition-all duration-300 transform bg-DarkGreen ${
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-600 last:border-b-0"
              >
                {item.hasDropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between py-3 cursor-pointer"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold">+</span>
                        <span className="font-semibold">{item.name}</span>
                      </div>
                    </div>

                    {/* Mobile Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="pl-6 pb-2 space-y-1">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.url}
                            className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-150 text-sm"
                            onClick={() => {
                              setActiveDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className="flex items-center gap-2 py-3 font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Language Selector */}
            <div className="relative border-b border-gray-600 last:border-b-0">
              <div
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => setShowOptions(!showOptions)}
              >
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 underline">Language</span>
                </div>
              </div>

              {showOptions && (
                <div className="pl-6 pb-2 space-y-1">
                  <button
                    className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-150 text-sm"
                    onClick={() => {
                      switchLanguage("en");
                      setShowOptions(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-150 text-sm"
                  >
                    العربية (Arabic)
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Get Started Button */}
            <button className="w-full px-6 py-3 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 mt-4 bg-[#562C26] hover:bg-[#4a241f] text-white">
              Get Started
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}