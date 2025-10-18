// src/app/dashboard/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const analytics = [
  { title: "Visiteurs", value: "12,345" },
  { title: "Sessions", value: "8,762" },
  { title: "Inscrits", value: "1,254" },
  { title: "Articles publiés", value: "342" },
  { title: "Commentaires", value: "1,024" },
  { title: "Taux de conversion", value: "4.5%" },
];

const DashboardPage = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {analytics.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="p-6 text-center bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
              <h2 className="text-lg font-medium text-black dark:text-white">
                {item.title}
              </h2>
              <p className="text-3xl font-bold mt-2 text-black dark:text-white">
                {item.value}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <Card className="p-6 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
            Graphiques et tendances
          </h2>
          <div className="h-64 bg-white dark:bg-black flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
            📊 Ici vous pouvez ajouter un graphique Chart.js / Recharts
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPage;
