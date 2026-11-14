# PROJEKTA - Site Web Vitrine Officiel

Plateforme web moderne développée avec **Next.js 15 (App Router)**, **TypeScript** et **Tailwind CSS**, conforme au cahier des charges fonctionnel et technique v1.0.

---

## 🚀 Fonctionnalités Implémentées

- **Architecture Next.js 15 App Router** avec rendu hybride et navigation optimisée.
- **5 Domaines d'Intervention Complets** :
  1. Développement web et mobile
  2. Création graphique et identité visuelle
  3. Portfolios et présence numérique
  4. Gestion des réseaux sociaux & communication digitale
  5. Formations et accompagnement informatique
- **Pages Développées** :
  - **Accueil (`/`)** : Hero section accrocheuse (« Donnons vie à vos idées grâce au numérique »), présentation entreprise, services illustrés, arguments de valeur, projets phares, processus de collaboration en 5 étapes, CTA.
  - **À propos (`/a-propos`)** : Histoire, mission, vision, valeurs et engagement client.
  - **Services (`/services`)** : Description exhaustive des 5 pôles avec toutes les prestations et livrables.
  - **Réalisations (`/realisations`)** : Galerie interactive avec filtres dynamiques par catégorie et modale d'étude de cas détaillée.
  - **Formations (`/formations`)** : Catalogue de formations pratiques pour débutants et professionnels avec objectifs, durées et projets de fin de cursus.
  - **Contact (`/contact`)** : Formulaire de contact fonctionnel avec validation serveur, coordonnées et FAQ.
  - **Demande de Devis (`/devis`)** : Formulaire multi-critères conforme à la section 5.2 (type de projet, besoins, fonctionnalités cochables, budget estimatif, coordonnées).
  - **Pages Légales** : Mentions légales (`/mentions-legales`) & Politique de confidentialité (`/politique-de-confidentialite`).
- **Canaux d'Interaction Directe** :
  - **Bouton WhatsApp Flottant** avec message contextuel pré-rempli et numéro configurable.
  - **Assistant Virtuel Intelligent** (modal interactive d'orientation et de réponse aux questions fréquentes sur PROJEKTA).
- **APIs Serveur** :
  - `POST /api/contact` : Validation et réception des messages.
  - `POST /api/devis` : Traitement structuré des demandes d'estimation.
- **SEO & Performance** :
  - Métadonnées OpenGraph, Twitter Cards, `robots.ts` et `sitemap.ts` automatiques.

---

## 🛠️ Stack Technique

- **Framework** : [Next.js 15](https://nextjs.org/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Style** : [Tailwind CSS 3](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Gestionnaire de paquets** : [pnpm](https://pnpm.io/)

---

## 📦 Installation & Démarrage

### Prérequis
- Node.js version 18.18+ ou 20+ (recommandé v24)
- pnpm (ou npm / yarn)

### 1. Installation des dépendances
```bash
pnpm install
```

### 2. Démarrage du serveur de développement
```bash
pnpm dev
```
Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 3. Compilation pour la production
```bash
pnpm build
```

### 4. Démarrage de la version de production
```bash
pnpm start
```

---

## 📁 Arborescence du Projet

```
projekta/
├── docs/
│   └── cahier_de_charge.md       # Cahier des charges officiel
├── public/                       # Fichiers statiques
├── src/
│   ├── app/
│   │   ├── api/                  # Routes API (contact, devis)
│   │   ├── a-propos/             # Page À propos
│   │   ├── contact/              # Page Contact
│   │   ├── devis/                # Configurateur de devis
│   │   ├── formations/           # Page Formations
│   │   ├── mentions-legales/     # Mentions légales
│   │   ├── politique-de-confidentialite/ # Politique de confidentialité
│   │   ├── realisations/         # Portfolio & Galerie de projets
│   │   ├── services/             # 5 Pôles d'expertise détaillés
│   │   ├── globals.css           # Styles Tailwind CSS & utilitaires
│   │   ├── layout.tsx            # Layout racine (Navbar, Footer, Floating WhatsApp & Bot)
│   │   ├── page.tsx              # Page d'accueil principale
│   │   ├── robots.ts             # Directives robots.txt
│   │   └── sitemap.ts            # Générateur sitemap XML
│   ├── components/
│   │   ├── common/               # Logo, Badge, SectionHeader, AssistantModal
│   │   ├── contact/              # Formulaire de contact
│   │   ├── devis/                # Formulaire de devis
│   │   ├── home/                 # Sections de la page d'accueil
│   │   └── layout/               # Navbar, Footer, FloatingActions
│   ├── data/
│   │   ├── company.ts            # Données entreprise & coordonnées
│   │   ├── faqs.ts               # Questions fréquentes
│   │   ├── formations.ts         # Données des formations
│   │   ├── projects.ts           # Projets & réalisations
│   │   └── services.ts           # Les 5 pôles de services
│   └── lib/
│       └── utils.ts              # Utilitaires Tailwind merge et formateurs
├── next.config.mjs               # Configuration Next.js
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts            # Charte graphique & couleurs PROJEKTA
├── tsconfig.json
└── README.md
```

---

## ⚙️ Configuration & Personnalisation

- Les coordonnées de contact, numéro WhatsApp, liens de réseaux sociaux et textes de l'entreprise sont centralisés dans `src/data/company.ts`.
- La palette de couleurs officielle (vert profond `#064e3b`, accent vert `#10b981`, etc.) est configurée dans `tailwind.config.ts`.
- Pour connecter un service d'envoi d'e-mails réels (Resend, SendGrid ou SMTP), complétez les routes `src/app/api/contact/route.ts` et `src/app/api/devis/route.ts`.

---

© 2026 **PROJEKTA** — « Donnons vie à vos idées grâce au numérique. »
