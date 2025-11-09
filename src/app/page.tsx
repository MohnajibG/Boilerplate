"use client";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Logo */}
      <motion.img
        src="/images/logo.png"
        alt="logo mng dev"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute top-10 md:top-16 w-48 h-48 md:w-48 md:h-48 object-contain blur-[0.2px]"
      />
      {/* Contenu principal */}
      <main className="flex flex-col items-center justify-center px-6 text-center mt-40 md:mt-60 space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-400 text-lg sm:text-xl md:text-4xl max-w-6xl font-extralight leading-relaxed px-4"
        >
          Turning ideas into impactful experiences.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="uppercase text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#058ffe]/40 via-[#2143ce]/40 to-[#dd3ed4]/40 text-black px-4 py-2 rounded-md hover:bg-gray-100/40 transition-colors duration-500"
        >
          Boilerplate
        </motion.h1>
      </main>
    </div>
  );
};

export default Home;
