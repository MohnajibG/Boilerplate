# Schéma complet — **Squelette de site** Next + Tailwind (pour porterfolio / projet réel)

Ok Najib — voici un **schéma complet** et prêt-à-implémenter pour un template Next + Tailwind qui contient : navigation, consommation d’APIs, auth (Firebase), paiements (Stripe / PayPal / Revolut), formulaire contact, dashboard, page About, et autres features utiles. Je te donne : architecture, stack technique, arborescence de fichiers, schéma de base de données, endpoints API principaux, flux d’authentification / paiement / webhooks, CI/CD, sécurité, tests, monitoring et recommandations UI/UX.

---

# 1) Vue d’ensemble architecture (haute-niveau)

- **Frontend** : Next.js (App Router), React + Tailwind CSS, TypeScript, React Query (TanStack Query) pour fetching, Zustand ou Jotai pour état global léger, Formik/Zod pour forms/validation.
- **Auth** : Firebase Authentication (email+password, Google, Apple, social).
- **Base de données** : **Firestore (Firebase)** pour users, profil, achats, logs. Optionnel : MongoDB (si tu veux une DB indépendante de Firebase) + Mongo Atlas.
- **Backend / API** : Next.js API routes / App Router Server Actions (TypeScript) pour endpoints server-side. Webhooks + logique sensible exécutés server-side (ou Cloud Functions si tu préfères Firebase Functions).
- **Paiements** : Stripe (car idéal pour cartes + paiements récurrents), PayPal (checkout standard), Revolut Business API (pour paiements pro / virement). Serveur traite la création de sessions + validation via webhooks.
- **Email / Contact form** : SendGrid / Mailgun pour envoi d’emails transactionnels. CAPTCHAs (reCAPTCHA v3 / hCaptcha) pour limiter spam.
- **Stockage fichiers** : Firebase Storage (images, receipts). Option alternative : S3.
- **Observabilité** : Sentry (erreurs), Logrocket (session replay optionnel), Plausible / Google Analytics pour traffic.
- **CI/CD / Hébergement** : GitHub Actions -> déploiement sur Vercel (frontend + serverless functions) ou Netlify. Webhooks pointent vers serverless functions.
- **Tests** : Jest + React Testing Library, Cypress E2E.

---

# 2) Stack technique (détaillé)

- Langage : **TypeScript**
- Framework : **Next.js (App Router)**
- Styling : **Tailwind CSS**
- State / Fetching :
  - TanStack Query (react-query) pour data fetching & caching
  - Zustand (ou Jotai) pour état client global léger

- Formulaire & validation : **React Hook Form** + **Zod**
- Auth : **Firebase Auth**
- DB : **Firestore** (ou MongoDB si besoin)
- Storage : **Firebase Storage** (ou AWS S3)
- Paiements : **Stripe**, **PayPal Checkout**, **Revolut Business API**
- Emails : **SendGrid** ou **Mailgun**
- Tests : **Jest**, **React Testing Library**, **Cypress**
- Lint/Format : **ESLint**, **Prettier**, **TypeScript**
- Monitoring : **Sentry**
- CI : **GitHub Actions**
- Hébergement : **Vercel** (recommandé)
- Analytics : **Plausible** ou **Google Analytics 4**
- Accessibilité : axe-core / Lighthouse
- OAuth Providers : Google, Apple (via Firebase)

---

# 3) Arborescence recommandée (exemple)

```
/my-portfolio-skeleton
├─ app/                      # Next App Router
│  ├─ layout.tsx
│  ├─ page.tsx               # Home
│  ├─ about/page.tsx
│  ├─ dashboard/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/                   # Next server actions / route handlers
│  │  ├─ auth/               # optional server endpoints
│  │  ├─ payments/
│  │  │  ├─ stripe-webhook.ts
│  │  │  ├─ paypal-webhook.ts
│  │  └─ contact/submit.ts
│  └─ (components pages...)
├─ components/
│  ├─ ui/
│  │  ├─ Header.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Nav.tsx
│  │  └─ Button.tsx
│  ├─ auth/
│  │  ├─ SignInForm.tsx
│  │  └─ SignUpForm.tsx
│  └─ dashboard/
├─ lib/
│  ├─ firebase.ts
│  ├─ stripe.ts
│  ├─ paypal.ts
│  └─ apiClient.ts
├─ hooks/
│  ├─ useAuth.ts
│  └─ useUserProfile.ts
├─ prisma/ or models/         # optional if using Prisma / Mongo schema
├─ public/
├─ styles/
│  └─ globals.css
├─ scripts/
├─ tests/
│  ├─ unit/
│  └─ e2e/
├─ .env.local
├─ next.config.js
├─ tailwind.config.js
├─ package.json
└─ README.md
```

---

# 4) Schéma de données (Firestore collections) — modèle essentiel

> Utilise des docs Firestore, chaque collection contient des documents.

**collections:**

- `users/{uid}`
  - `email`, `displayName`, `roles` (admin/user), `createdAt`, `profilePicUrl`, `settings`

- `profiles/{uid}` (optionnel séparé)
  - `bio`, `phone`, `address`, `portfolioLinks`, `skills`

- `payments/{paymentId}`
  - `userId`, `provider` (stripe/paypal/revolut), `amount`, `currency`, `status`, `createdAt`, `metadata`

- `products/{productId}` (si vend des produits/abos)
  - `name`, `price`, `currency`, `type`

- `orders/{orderId}`
  - `userId`, `items`, `total`, `status`

- `contacts/{contactId}`
  - `name`, `email`, `message`, `handled`, `createdAt`

- `logs/` (ops logs) — ou exporter logs dans BigQuery/Stackdriver

ER simple : users ↔ payments (1-n), users ↔ orders (1-n), products ↔ orders (n-m via items).

---

# 5) Endpoints API (Next API routes / server actions)

> Ces endpoints sont serveur-side (ne pas exposer clés secrètes côté client)

**Auth (client-side via Firebase SDK)**

- Auth flows gérés principalement côté client par Firebase SDK (signInWithEmailAndPassword, signInWithPopup etc.). Server-side only for privileged ops: `GET /api/auth/user` -> returns server-verified JWT/profile.

**Payments**

- `POST /api/payments/stripe/create-session`
  - body: `{ productId, userId, successUrl, cancelUrl }`
  - server: crée Stripe Checkout session, retourne `url`.

- `POST /api/payments/stripe/create-intent` (pour cards saved)
- `POST /api/payments/paypal/create-order`
  - server: crée order (PayPal), retourne approval link.

- `POST /api/payments/revolut/create-payment`
  - server: crée payment via Revolut Business API.

- `POST /api/payments/webhook/stripe` (webhook handler)
- `POST /api/payments/webhook/paypal`
- `POST /api/contact/submit`
  - body: `{name,email,message}` -> validate -> save to `contacts` -> send email -> return success.

**Profile**

- `GET /api/profile/[uid]`
- `PUT /api/profile/[uid]` (auth required)

**Admin**

- `GET /api/admin/stats` (orders, revenu, users) — roles check.

---

# 6) Flux d’authentification (séquence simplifiée)

1. Client affiche page Login -> Firebase Auth UI (email or OAuth)
2. User s’authentifie -> Firebase fournit ID token JWT
3. Client envoie ID token aux endpoints server (ex: `/api/profile`) dans header `Authorization: Bearer <idToken>`
4. Server (Next API route) valide token via Firebase Admin SDK (`verifyIdToken`) -> récupère `uid` -> exécute lecture/écriture dans Firestore

---

# 7) Flux de paiement (ex : Stripe Checkout)

1. Client clique « Acheter » → appelle `POST /api/payments/stripe/create-session` (server) avec `productId`.
2. Server crée Session via Stripe secret key et retourne `sessionId` / URL.
3. Client redirige vers Stripe Checkout.
4. Stripe webhook `checkout.session.completed` arrive à `/api/payments/webhook/stripe`.
   - Server vérifie signature webhook, met à jour doc `payments/{id}` et `orders/{id}` dans Firestore, envoie email de confirmation.

5. Client voit page success et dashboard montre la transaction.

> Idem pour PayPal: create-order -> user approve -> capture -> webhook or client capture -> server verifies and saves.

**Important** : **Ne jamais** mettre les clefs Stripe / PayPal ou Revolut côté client. Toujours webhooks signés.

---

# 8) Webhooks handling (sécurité)

- Vérifier la signature fournie par Stripe (`stripe.webhooks.constructEvent(payload, sig, endpointSecret)`).
- Pour PayPal, valider l’événement via l’API PayPal (ou via signature).
- Pour Revolut, utiliser leur méthode de vérification.
- Toujours idempotence : stocker `webhookEventId` et ignorer doublons.
- Mettre les secrets en vars d’environnement : `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `PAYPAL_CLIENT_ID`, `PAYPAL_SECRET`, `REVOLUT_TOKEN`.

---

# 9) Variables d’environnement proposées

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY=...         # pour admin sdk (server)
FIREBASE_CLIENT_EMAIL=...

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PUBLISHABLE_KEY=  # client

PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_WEBHOOK_ID=

REVOLUT_API_TOKEN=
REVOLUT_WEBHOOK_SECRET=

SENDGRID_API_KEY=
SENTRY_DSN=
DATABASE_URL=               # (si Mongo/Prisma)
NEXT_PUBLIC_ANALYTICS_ID=

NODE_ENV=production
```

---

# 10) Sécurité & bonnes pratiques

- Utilise HTTPS partout (Vercel s’en charge).
- Protéger les endpoints admin (role-based access). Vérifier `uid` et rôle en server-side.
- Rate-limit endpoints sensibles (login attempts, contact form) — via middleware ou Cloudflare.
- Stocke uniquement ce qui est nécessaire. Hash/masque données sensibles.
- CSP headers, X-Frame-Options, XSS protection (Next.js headers).
- Scanner dependances régulièrement (dependabot).
- Activer MFA pour comptes admin Firebase.
- Use HSTS en prod.

---

# 11) Tests & qualité

- **Unit** : Jest + React Testing Library pour composants et hooks.
- **Integration/API** : Supertest + jest pour Next API routes.
- **E2E** : Cypress (auth flows, checkout flows, contact).
- **Lint** : ESLint + Prettier rules.
- **Type-check** : tsc --noEmit dans CI.

---

# 12) CI/CD (exemple GitHub Actions)

Steps:

1. Checkout
2. Install dependencies
3. Run lint
4. Run typecheck
5. Run unit tests
6. Build (`next build`)
7. Run E2E (optionnel on staging)
8. Deploy to Vercel (via Vercel Git integration or `vercel` CLI)

Un job webhook peut déclencher déploiement automatique sur `main`.

---

# 13) Monitoring / Analytics / SEO / Performance

- **Sentry** pour erreurs JS/Server.
- **Plausible** ou **GA4** pour analytics. Respect RGPD (consent banner).
- **Lighthouse** audits : perf, accessibilité, SEO.
- Générer `sitemap.xml`, `robots.txt`, Open Graph meta tags (déjà as-tu meta).
- Images responsives : Next Image / optimisation.
- Use `getServerSideProps` or server actions pour pages SEO critiques, sinon ISR (Incremental Static Regeneration) pour contenus stables.

---

# 14) Accessibilité & internationalisation

- i18n (next-i18next) — français/arabe/darja si tu veux.
- Respect WCAG (contraste, keyboard navigation, aria attributes).
- Tests a11y automatic (axe-core).

---

# 15) Dashboard (features recommandées)

- **Vue générale** : résumé des métriques (visites, revenus, conversions).
- **Profil utilisateur** : éditer profil, méthode de paiement, abonnements.
- **Mes achats / factures** : historique + receipts (pdf).
- **Admin** : gérer utilisateurs, commandes, messages contact.
- **Notifications** : in-app + email.
- **Paramètres** : préférences, langue, sécurité.

---

# 16) Composants UI & Design System

- Atomes : Button, Input, Card, Modal, Avatar, Spinner.
- Molecules : NavBar, AuthForm, PaymentCard.
- Organisms : Header, Footer, DashboardLayout.
- Theme : Tailwind config avec tokens (colors, spacing, radii).
- Dark mode support via Tailwind + class strategy.

---

# 17) Exemples d’URLs / Pages

- `/` — Landing
- `/about` — About
- `/pricing` — plans / paiement
- `/projects` — portfolio pieces
- `/contact` — formulaire contact
- `/auth/login`, `/auth/signup`
- `/dashboard` — area utilisateur
- `/api/*` — server endpoints

---

# 18) Suggestions “bonus” à ajouter au portfolio (pour briller)

- **Demo live** du paiement (mode test Stripe) sur une page “Buy me a coffee”.
- **Feature toggles** (ex : dark mode).
- **Preview CMS** pour ajouter projets (Sanity / Contentful / Netlify CMS).
- **Badges** affichant CI build status, coverage.
- **Documentation** (README technique + architecture diagram image).
- **Automated screenshots** / visual regression (Chromatic).
- **Démo vidéo courte** (30–60s) montrant auth → checkout → dashboard.
- **Internationalisation** (FR/AR), montre que tu gères RTL.

---

# 19) Séquence minimale de mise en place (roadmap court)

1. Installer Next + Tailwind + TypeScript, config basic.
2. Intégrer Firebase (Auth + Firestore).
3. Créer layout + navigation + pages (Home, About, Contact).
4. Mettre en place contact form avec SendGrid.
5. Intégrer Stripe checkout & webhook local testing (Stripe CLI).
6. Dashboard basique (liste des payments).
7. Tests unitaires + CI.
8. Déployer sur Vercel, activer Sentry & Analytics.
9. Ajouter PayPal + Revolut (optionnel après Stripe).

---

# 20) Diagramme séquentiel résumé (texte)

**Signup & checkout**

- User → Client → Firebase Auth → returns idToken → Client → call `/api/payments/...` with idToken → Server verifies token (Firebase Admin) → Server creates Stripe session → Client redirects → Stripe → webhook → Server updates Firestore → Server sends confirmation mail → Client shows order in Dashboard.

---

# 21) Ressources / commandes utiles (rapide)

- `npx create-next-app@latest --ts`
- `npm install tailwindcss postcss autoprefixer && npx tailwindcss init -p`
- `npm i firebase @firebase/admin stripe react-hook-form zod @tanstack/react-query zustand sendgrid`
- `stripe listen --forward-to localhost:3000/api/payments/webhook/stripe` (dev)
