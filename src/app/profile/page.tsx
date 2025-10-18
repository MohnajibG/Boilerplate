// src/app/profile/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const user = {
    name: "Mohamed Najib",
    email: "najib@example.com",
    role: "Développeur Web FullStack",
    joined: "Janvier 2024",
    bio: "Passionné par le web et la blockchain, je développe des applications modernes et sécurisées.",
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-8 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full bg-black dark:bg-white mb-6 flex items-center justify-center text-white dark:text-black text-3xl font-bold">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Nom et rôle */}
            <h1 className="text-2xl font-bold text-black dark:text-white">
              {user.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{user.role}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Membre depuis {user.joined}
            </p>

            {/* Bio */}
            <p className="mt-4 text-black dark:text-white">{user.bio}</p>

            {/* Actions */}
            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                Modifier le profil
              </button>
              <button className="px-4 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                Déconnexion
              </button>
            </div>
          </div>
        </Card>

        {/* Section infos supplémentaires */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Card className="p-6 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
              Email
            </h2>
            <p className="text-black dark:text-white">{user.email}</p>
          </Card>
          <Card className="p-6 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
              Rôle
            </h2>
            <p className="text-black dark:text-white">{user.role}</p>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfilePage;
