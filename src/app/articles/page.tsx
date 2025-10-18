"use client";

import { JSX, useState } from "react";
import Article1 from "../../data/articles/article1";
import Article2 from "../../data/articles/article2";

import { ArticleCard } from "@/components/ui/article-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface ModalProps {
  content: JSX.Element;
  onClose: () => void;
  title: string;
}

const Modal = ({ content, onClose, title }: ModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-3xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ScrollArea className="h-[70vh]">
        <div className="prose dark:prose-invert whitespace-pre-wrap">
          {content}
        </div>
      </ScrollArea>
      <Button className="mt-4" onClick={onClose}>
        Fermer
      </Button>
    </motion.div>
  </div>
);

const articles = [
  {
    id: 1,
    title: "La nouvelle économie de l’attention",
    summary:
      "Découvrez comment l’économie des créateurs évolue et comment créer un projet moderne qui valorise l’attention réelle des utilisateurs.",
    image: "/images/article1.jpg",
    component: <Article1 />,
  },
  {
    id: 2,
    title: "Écosystème blockchain pour universités",
    summary:
      "Proposez aux écoles et universités un système sécurisé pour enregistrer diplômes et relevés de notes sur la blockchain.",
    image: "/images/article2.jpg",
    component: <Article2 />,
  },
];

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const openModal = (id: number) => setSelectedArticle(id);
  const closeModal = () => setSelectedArticle(null);

  const articleToShow = articles.find((a) => a.id === selectedArticle);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArticleCard
              title={article.title}
              summary={article.summary}
              image={article.image}
              onReadMore={() => openModal(article.id)}
              id={String(article.id)}
            />
          </motion.div>
        ))}
      </div>

      {selectedArticle && articleToShow && (
        <Modal
          title={articleToShow.title}
          onClose={closeModal}
          content={articleToShow.component}
        />
      )}
    </section>
  );
};

export default ArticlesPage;
