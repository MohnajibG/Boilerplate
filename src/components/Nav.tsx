// components/Nav.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Profile", path: "/profile" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Articles", path: "/articles" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center">
      {/* Desktop nav */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="cursor-pointer hover:underline transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded hover:bg-muted transition ml-2"
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background flex flex-col items-center shadow-lg animate-slide-down z-50 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="py-4 w-full text-center border-b border-border hover:bg-muted cursor-pointer transition"
              onClick={() => setMenuOpen(false)} // ferme le menu quand on clique
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
