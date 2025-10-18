"use client";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <main className="flex flex-col items-center justify-center p-8 md:p-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome TO{" "}
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="uppercase bg-white text-black px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
          >
            Boilerplate
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 mt-6 text-lg max-w-lg"
        >
          🚀 Démarre ton projet Next.js avec Tailwind, Framer Motion et une
          structure déjà prête.
        </motion.p>
      </main>
    </div>
  );
};

export default Home;
