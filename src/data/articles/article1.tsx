"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.4 },
  }),
};

const Article1 = () => {
  const sections = [
    {
      title: "🌍 Contexte général",
      content: (
        <>
          <p>
            Depuis quelques années, tout le monde cherche à monétiser sa
            présence en ligne. Les gens créent des profils TikTok, Instagram ou
            YouTube uniquement pour diffuser des pubs, obtenir des vues et
            gagner de l’argent. Mais cette économie de l’attention est en train
            de saturer :
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            <li>Trop de créateurs, trop de contenu, trop de pubs.</li>
            <li>Le public se lasse.</li>
            <li>La valeur de l’attention baisse, car elle devient commune.</li>
          </ul>
          <p className="mt-4">
            Résultat : les marques comme les internautes cherchent quelque chose
            de plus humain, plus sincère, plus utile.
          </p>
        </>
      ),
    },
    {
      title: "🔄 Évolution naturelle de cette tendance",
      content: (
        <>
          <h3 className="font-semibold">Aujourd’hui (2025)</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Les gens sont devenus des panneaux publicitaires humains.</li>
            <li>
              L’économie des créateurs est rentable pour une minorité seulement.
            </li>
            <li>Les algorithmes favorisent la quantité, pas la qualité.</li>
          </ul>

          <h3 className="font-semibold">Prochaine étape (2026-2027)</h3>
          <ul className="list-disc list-inside mb-2">
            <li>
              Le retour à l’humain : interactions vraies, micro-communautés.
            </li>
            <li>Marques collaborant avec des gens crédibles.</li>
            <li>Contenu sincère, utile et local redevient précieux.</li>
          </ul>

          <h3 className="font-semibold">Horizon plus lointain (2030+)</h3>
          <ul className="list-disc list-inside">
            <li>
              Fusion entre humain et technologie : contenus ultra-personnalisés,
              authenticité vérifiée, expérience émotionnelle.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "🧭 Opportunité d’innovation pour toi",
      content: (
        <p>
          Tu veux reprendre la logique ancienne de la monétisation web, mais de
          manière moderne : système où les gens sont récompensés pour leur
          attention ou leurs partages, plus intelligent, humain et transparent,
          sans dépendre de projets externes.
        </p>
      ),
    },
    {
      title: "💡 Trois directions possibles",
      content: (
        <>
          <h3 className="font-semibold">1. Application Web – “SmartPub”</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Plateforme centralisant pubs, partage et suivi automatique.</li>
            <li>
              Récompenses distribuées directement par la plateforme (fiat ou
              autre moyen simple).
            </li>
            <li>Tech : Node.js, MongoDB, Next.js, Tailwind.</li>
            <li>
              Avantage : scalable, transparent, cible jeunes/influenceurs.
            </li>
          </ul>

          <h3 className="font-semibold">
            2. Extension/App mobile – “AdMirror”
          </h3>
          <ul className="list-disc list-inside mb-2">
            <li>L’utilisateur gagne en naviguant ou partageant des pubs.</li>
            <li>Choix des pubs et suivi clair des gains.</li>
            <li>Avantage : utile, non intrusive, grand public.</li>
          </ul>

          <h3 className="font-semibold">3. Réseau local d’ambassadeurs</h3>
          <ul className="list-disc list-inside">
            <li>
              Commerces locaux publient campagnes, habitants partagent et
              gagnent.
            </li>
            <li>Commission prise par la plateforme.</li>
            <li>Avantage : humain, local, simple à lancer.</li>
          </ul>
        </>
      ),
    },
    {
      title: "🔮 Projection réaliste",
      content: (
        <ul className="list-disc list-inside">
          <li>0–6 mois : prototype + premiers tests.</li>
          <li>1 an : premières collaborations avec commerces ou annonceurs.</li>
          <li>
            3 ans : croissance exponentielle grâce à la confiance et
            transparence.
          </li>
        </ul>
      ),
    },
    {
      title: "🧠 Résumé",
      content: (
        <p>
          On est passés de : Les marques parlent → Tout le monde parle → Seuls
          les vrais humains comptent.
        </p>
      ),
    },
  ];

  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-12 px-6">
      {/* IMAGE */}
      <div className="relative w-full h-72 mb-8 rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/article1.jpg"
          alt="La nouvelle économie de l’attention"
          fill
          className="object-cover"
        />
      </div>

      {/* TITRE */}
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        La nouvelle économie de l’attention : vers un retour à l’humain
      </h1>

      {/* SOUS-TITRE */}
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
        Découvrez comment l’économie des créateurs évolue et comment créer un
        projet moderne qui valorise l’attention réelle des utilisateurs.
      </p>

      {/* CONTENU AVEC ANIMATION */}
      <section className="space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {section.title}
            </h2>
            <div className="space-y-3">{section.content}</div>
          </motion.div>
        ))}
      </section>
    </article>
  );
};

export default Article1;
