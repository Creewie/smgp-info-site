// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Strona główna", href: "/" },
  { name: "Ogłoszenia", href: "/ogloszenia" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "O nas", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-gray-900 border-b border-gray-800 fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto p-4">
        <nav className="flex justify-center">
          <ul className="flex flex-wrap items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}