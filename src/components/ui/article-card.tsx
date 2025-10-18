"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ArticleCardProps {
  id: string;
  title: string;
  summary: string;
  image: string;
  onReadMore: (id: string) => void;
}

export const ArticleCard = ({
  id,
  title,
  summary,
  image,
  onReadMore,
}: ArticleCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>{" "}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 flex-1">{summary}</p>
        <Button className="mt-4 self-start" onClick={() => onReadMore(id)}>
          Read More
        </Button>
      </div>
    </div>
  );
};
