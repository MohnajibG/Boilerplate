// src/components/ui/card.tsx
"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-gray-800 shadow-md rounded-md p-6 transition-all hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
