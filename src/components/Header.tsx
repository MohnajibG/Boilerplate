"use client";

import { ModeToggle } from "./theme-toggle";
import Nav from "./Nav";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full bg-foreground text-background flex items-center justify-center- px-6 py-4 shadow-md relative">
      {/* Logo centré */}
      <motion.img
        src="/images/logo.png"
        alt="MNG DEV logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-28"
      />
      {/* Navigation gauche */}
      <div className="">
        <Nav />
      </div>

      {/* Mode toggle à droite */}
      <div className=" absolute right-1 flex justify-end border border-black rounded-xs">
        <ModeToggle />
      </div>
    </header>
  );
}
