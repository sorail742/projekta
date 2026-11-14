# PROJEKTA - Site Web Vitrine Officiel

Plateforme web moderne développée avec **Next.js 15 (App Router)**, **TypeScript** et **Tailwind CSS**, conforme au cahier des charges fonctionnel et technique v1.0.

> **Baseline Officielle :** `INNOVATION • TECHNOLOGY • PROJECTS`  
> **Slogan :** « Donnons vie à vos idées grâce au numérique. »

---

## 🎨 Charte Graphique & Logos Officiels

Le site intègre et met en valeur les logos officiels de PROJEKTA :
- **Fichiers sources d'origine** :
  - `/public/logo.jpg` : Bannière originale (960×320).
  - `/public/logoo.jpg` : Export source haute résolution (1600×1600).
- **Déclinaisons optimisées haute fidélité** :
  - **`/public/logo-full.png`** : Version horizontale transparente haute résolution (1254×464) pour la barre de navigation et les en-têtes sans artefact de fond.
  - **`/public/logo-icon.png`** : Emblème géométrique carré (484×484) parfaitement centré pour les favicons, l'avatar de l'assistant virtuel et les badges applicatifs.
  - **`/public/logo-white.png`** : Déclinaison contrastée pour fonds sombres (footer), avec typographie blanche et préservation des teintes officielles (vert et bleu).
  - **`/public/logo-full-whitebg.png`** : Déclinaison sur fond blanc pur pour les partages sociaux (OpenGraph, Twitter Cards).

### Palette de Couleurs Officielles :
- **Vert Innovation (`#16a34a` / `#22c55e`)** : Chevron principal, symbole de croissance et de dynamisme.
- **Bleu Technologie (`#2563eb` / `#3b82f6`)** : Arc de cercle, symbole de connectivité et de rigueur technique.
- **Noir Profond (`#0f172a` / `#111827`)** : Chevron central et typographie principale.
- **Blanc & Gris Neutre (`#ffffff` / `#f8fafc`)** : Clarté et lisibilité maximale.

---

## 🚀 Fonctionnalités Implémentées

- **Architecture Next.js 15 App Router** avec rendu hybride et navigation fluide.
- **5 Domaines d'Intervention Complets** :
  1. Développement web et mobile
  2. Création graphique et identité visuelle
  3. Portfolios et présence numérique
  4. Gestion des réseaux sociaux & communication digitale
  5. Formations et accompagnement informatique
- **Pages Développées** :
  - **Accueil (`/`)** : Hero section avec logos officiels, présentation entreprise, services illustrés, arguments de valeur, projets phares, processus de collaboration en 5 étapes, CTA.
  - **À propos (`/a-propos`)** : Histoire, mission, vision, valeurs et engagement client.
  - **Services (`/services`)** : Description exhaustive des 5 pôles avec toutes les prestations et livrables.
  - **Réalisations (`/realisations`)** : Galerie interactive avec filtres dynamiques par catégorie et modale d'étude de cas détaillée.
  - **Formations (`/formations`)** : Catalogue de formations pratiques pour débutants et professionnels avec objectifs, durées et projets de fin de cursus.
  - **Contact (`/contact`)** : Formulaire de contact fonctionnel avec validation serveur, coordonnées et FAQ.
  - **Demande de Devis (`/devis`)** : Formulaire multi-critères conforme à la section 5.2.
  - **Pages Légales** : Mentions légales (`/mentions-legales`) & Politique de confidentialité (`/politique-de-confidentialite`).
- **Canaux d'Interaction Directe** :
  - **Bouton WhatsApp Flottant** avec message contextuel pré-rempli et numéro configurable.
  - **Assistant Virtuel Intelligent** avec avatar de marque pour guider les visiteurs.
- **APIs Serveur** :
  - `POST /api/contact` : Validation et réception des messages.
  - `POST /api/devis` : Traitement structuré des demandes d'estimation.

---

## 📦 Installation & Démarrage

### 1. Démarrage en Développement
```bash
pnpm dev
```
Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### 2. Compilation et Lancement en Production
```bash
# Compilation
pnpm build

# Lancement
pnpm start
```

*Note : si vous basculez entre le mode production (`pnpm build`) et le mode développement (`pnpm dev`), vous pouvez vider le cache `.next` si nécessaire :*
```bash
# PowerShell
Remove-Item -Recurse -Force .next
```

---

© 2026 **PROJEKTA** — « Donnons vie à vos idées grâce au numérique. »
