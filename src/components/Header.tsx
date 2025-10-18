// components/Header.tsx
"use client";

import { ModeToggle } from "./theme-toggle";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full bg-foreground text-background flex items-center px-6 py-4 shadow-md relative">
      {/* Navigation à gauche */}
      <div className="flex-1">
        <Nav />
      </div>

      {/* Logo centré */}
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold uppercase">
        Boilerplate
      </h1>

      {/* ModeToggle à droite */}
      <div className="flex-1 flex justify-end">
        <ModeToggle />
      </div>
    </header>
  );
}
