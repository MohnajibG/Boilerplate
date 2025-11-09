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
          className="uppercase text-4xl md:text-6xl font-bold bg-white text-black px-3 py-1 rounded-md hover:bg-gray-300 transition-colors"
        >
          Boilerplate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 mt-6 text-xl max-w-lg"
        >
          Turning ideas into impactful experiences.
        </motion.p>
        <motion.img
          src="/images/logo.png"
          alt="logo mng dev"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-5 w-48 h-48 md:w-126 md:h-126 object-contain"
        />
      </main>
    </div>
  );
};

export default Home;
