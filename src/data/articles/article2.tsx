// src/data/articles/Article2.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.38 },
  }),
};

const Article2 = () => {
  const sections = [
    {
      title: "🔍 Problématique",
      content: (
        <>
          <p>
            Les établissements (écoles, universités, centres de formation)
            gèrent des diplômes et relevés de notes souvent en silos : fichiers
            PDF, bases internes, envois par email. Cela crée des frictions :
            perte de documents, falsifications, processus lourds pour les
            démarches administratives ou les vérifications d’employeurs.
          </p>
        </>
      ),
    },
    {
      title: "🧭 Vision",
      content: (
        <>
          <p>
            Créer un écosystème simple et sécurisé permettant aux établissements
            d’enregistrer officiellement diplômes et relevés de notes sur une
            blockchain publique ou permissionnée, tout en offrant une UX
            familière pour les utilisateurs (étudiants, services RH, tiers).
          </p>
        </>
      ),
    },
    {
      title: "⚙️ Architecture proposée",
      content: (
        <>
          <p className="mb-2">Composants clés :</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              **Portail établissement** — interface admin pour télécharger
              relevés, signer numériquement et déclencher l’enregistrement.
            </li>
            <li>
              **Service de notarisation** — smart contracts qui stockent un hash
              immuable (référence) et le métadata minimal nécessaire.
            </li>
            <li>
              **Wallet institutionnel** — gestion des frais et clés, avec
              permissions par rôle.
            </li>
            <li>
              **API / intégration** — endpoints REST/GraphQL pour que les
              systèmes internes puissent automatiser l’enregistrement.
            </li>
            <li>
              **Portail étudiant** — accès aux documents, partage sécurisé via
              lien vérifiable.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "🔐 Sécurité & confidentialité",
      content: (
        <>
          <p>
            Seules des **empreintes cryptographiques (hashes)** et métadonnées
            non sensibles sont stockées on-chain. Les documents complets (PDF)
            restent chiffrés hors chaîne (S3 chiffré, IPFS chiffré) et sont
            accessibles via permissions. Cela garantit immutabilité sans exposer
            les données privées.
          </p>
        </>
      ),
    },
    {
      title: "🎯 Bénéfices pour les écoles et universités",
      content: (
        <>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Vérification instantanée des diplômes par tiers (entreprises).
            </li>
            <li>Réduction des fraudes et falsifications.</li>
            <li>Processus d’émission automatisé et traçable.</li>
            <li>
              Expérience moderne pour les alumni (partage simple et sécurisé).
            </li>
            <li>
              Valorisation de l’établissement via transparence et innovation.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "🚀 Feuille de route (MVP → 1 an)",
      content: (
        <>
          <ol className="list-decimal list-inside space-y-1">
            <li>
              **0–3 mois :** prototype UI + smart contract minimal (store hash).
            </li>
            <li>
              **3–6 mois :** intégration API, portail établissement, chiffrement
              documents.
            </li>
            <li>
              **6–12 mois :** pilotes avec 1–3 établissements, automatisation et
              audit sécurité.
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "🤝 Modèle commercial",
      content: (
        <>
          <p>
            Offrir le service en SaaS aux établissements (abonnement annuel) et
            proposer une option “pay-per-verification” pour les tiers (RH).
            Possibilité d’extensions payantes : API premium, rapports, archivage
            longue durée.
          </p>
        </>
      ),
    },
    {
      title: "🧠 Conclusion",
      content: (
        <>
          <p>
            Un écosystème blockchain pour diplômes permet de moderniser la
            confiance académique : simplicité pour les établissements, sécurité
            pour les étudiants, et vérifiabilité pour les employeurs. C’est une
            opportunité réaliste et utile à court/moyen terme.
          </p>
        </>
      ),
    },
  ];

  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-12 px-6 text-gray-900 dark:text-gray-100">
      {/* IMAGE */}
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          src="/images/article2.jpg"
          alt="Écosystème diplômes blockchain"
          fill
          className="object-cover"
        />
      </div>

      {/* TITRE */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Construire un écosystème pour enregistrer diplômes et relevés de notes
        sur la blockchain
      </h1>

      {/* SOUS-TITRE */}
      <p className="text-center text-lg mb-8">
        Proposer aux écoles et universités une solution moderne, vérifiable et
        sécurisée pour la gestion des diplômes.
      </p>

      {/* CONTENU ANIMÉ */}
      <section className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
            <div className="space-y-3">{section.content}</div>
          </motion.div>
        ))}
      </section>
    </article>
  );
};

export default Article2;
