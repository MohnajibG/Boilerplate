"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // pour détecter la page active
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const pathname = usePathname();

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="relative flex items-center">
      {/* Desktop nav */}
      <div className="hidden md:flex gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`cursor-pointer relative px-3 py-2 rounded-xs transition-transform duration-500 ease-out
    ${
      isActive
        ? "text-white bg-gradient-to-r from-[#058ffe]/40 via-[#2143ce]/40 to-[#dd3ed4]/40 shadow-xs duration-200 ease-out font-bold p-2"
        : "font-extralight p-2"
    }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-xs hover:bg-muted hover:text-black transition ml-2 "
      >
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-12 left-2 w-full bg-background flex flex-col items-center shadow-lg z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(0,0,0,0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`py-4 w-full text-center border-b text-foreground border-border cursor-pointer transition ${
                    isActive ? "font-bold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <Link href={item.path}>{item.name}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
