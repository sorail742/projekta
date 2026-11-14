export interface FormationItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  level: "Débutant" | "Intermédiaire" | "Tous niveaux";
  duration: string;
  format: string;
  shortDescription: string;
  longDescription: string;
  targetAudience: string[];
  prerequisites: string;
  learningGoals: string[];
  curriculum: {
    module: string;
    description: string;
  }[];
  finalProject: string;
}

export const FORMATIONS_DATA: FormationItem[] = [
  {
    id: "initiation-programmation",
    slug: "initiation-programmation-algorithmes",
    title: "Initiation à la programmation & logique algorithmique",
    badge: "Idéal débutants",
    level: "Débutant",
    duration: "4 semaines (30 heures)",
    format: "Présentiel / Distanciel",
    shortDescription:
      "Démystifiez le code, comprenez le raisonnement informatique et apprenez à écrire vos premiers scripts avec une méthode claire et progressive.",
    longDescription:
      "Ce cursus s'adresse à toute personne désireuse de comprendre comment fonctionnent les ordinateurs et les logiciels. À travers des concepts simples et des exercices pas à pas, vous développerez l'esprit logique et résoudrez des problèmes concrets.",
    targetAudience: [
      "Grands débutants n'ayant jamais écrit une ligne de code",
      "Étudiants et bacheliers curieux de l'informatique",
      "Professionnels souhaitant s'initier aux technologies de demain",
    ],
    prerequisites:
      "Savoir utiliser un ordinateur (clavier, souris, navigation sur le web). Aucun prérequis en mathématiques avancées.",
    learningGoals: [
      "Comprendre les variables, boucles, conditions et fonctions",
      "Écrire des algorithmes structurés pour résoudre un problème donné",
      "Manipuler des structures de données simples (listes, dictionnaires)",
      "Adopter de bonnes habitudes de lecture et d'écriture de code",
    ],
    curriculum: [
      {
        module: "Module 1 : Les fondations de la logique numérique",
        description:
          "Comment raisonne un ordinateur : entrées, sorties, opérations élémentaires et pseudo-code.",
      },
      {
        module: "Module 2 : Variables, types et flux de contrôle",
        description:
          "Manipuler du texte, des nombres et diriger le programme avec if/else et les boucles.",
      },
      {
        module: "Module 3 : Fonctions et modularité",
        description:
          "Découper un problème complexe en petites tâches réutilisables et autonomes.",
      },
      {
        module: "Module 4 : Gestion des erreurs et mini-projets",
        description:
          "Déboguer son code calmement et concevoir des scripts utilitaires interactifs.",
      },
    ],
    finalProject:
      "Création d'un utilitaire interactif en console (calculateur de devis ou gestionnaire de stock simplifié).",
  },
  {
    id: "dev-web-fondations",
    slug: "developpement-web-frontend-bases",
    title: "Développement Web Frontend : HTML, CSS & JavaScript",
    badge: "Le plus demandé",
    level: "Débutant",
    duration: "6 semaines (50 heures)",
    format: "Présentiel / Distanciel",
    shortDescription:
      "Apprenez à concevoir des pages web élégantes, adaptées à tous les écrans de smartphones et interactives pour vos futurs clients.",
    longDescription:
      "Une immersion pratique dans les technologies fondamentales du web. Vous apprendrez à structurer une page avec HTML5 sémantique, à la styliser avec modernité via CSS3/Flexbox/Grid, et à la rendre vivante grâce à JavaScript.",
    targetAudience: [
      "Étudiants voulant construire leurs propres projets web",
      "Créatifs souhaitant donner vie à leurs maquettes",
      "Entrepreneurs désireux de créer et maintenir leur vitrine web",
    ],
    prerequisites:
      "Connaissance de base de l'ordinateur. La maîtrise de la logique algorithmique est un plus mais n'est pas obligatoire.",
    learningGoals: [
      "Maîtriser la sémantique HTML5 et l'accessibilité web",
      "Créer des mises en page responsive avec CSS Moderne et Flexbox/Grid",
      "Manipuler le DOM avec JavaScript et gérer les événements utilisateurs",
      "Mettre son premier site en ligne gratuitement avec nom de domaine",
    ],
    curriculum: [
      {
        module: "Module 1 : Structure & Sémantique HTML5",
        description:
          "Balises essentielles, structuration de l'information, formulaires et bonnes pratiques SEO.",
      },
      {
        module: "Module 2 : Design & Mise en page avec CSS Moderne",
        description:
          "Sélecteurs, couleurs, typographies, modèle de boîte, Flexbox et Grid responsive.",
      },
      {
        module: "Module 3 : Dynamisme avec JavaScript vanilla",
        description:
          "Sélection d'éléments, écouteurs d'événements, animations simples et manipulation du contenu.",
      },
      {
        module: "Module 4 : Hébergement & Déploiement",
        description:
          "Introduction à Git/GitHub et mise en ligne sur Vercel/Netlify en quelques secondes.",
      },
    ],
    finalProject:
      "Création intégrale d'un site vitrine responsive pour un commerce ou un portfolio personnel prêt à l'emploi.",
  },
  {
    id: "web-moderne-react-next",
    slug: "web-moderne-react-nextjs-technologies",
    title: "Découverte des technologies web modernes : React & Next.js",
    badge: "Perfectionnement",
    level: "Intermédiaire",
    duration: "6 semaines (45 heures)",
    format: "En ligne / Présentiel",
    shortDescription:
      "Passez au niveau supérieur : créez des applications web dynamiques, modulaires et performantes avec l'écosystème React et Next.js.",
    longDescription:
      "Découvrez l'approche par composants réutilisables qui fait la puissance des applications modernes. Ce module vous guide dans la compréhension de l'écosystème React, la gestion de l'état, et les atouts de Next.js pour le référencement et la rapidité.",
    targetAudience: [
      "Développeurs juniors ayant déjà de bonnes bases en HTML/CSS/JavaScript",
      "Étudiants en filière informatique souhaitant découvrir les stacks professionnelles",
    ],
    prerequisites:
      "Bonne maîtrise de HTML, CSS et des bases de JavaScript moderne (ES6 : arrow functions, destructuring, promises).",
    learningGoals: [
      "Comprendre la philosophie des composants React et le virtual DOM",
      "Gérer les états et effets avec les hooks essentiels (useState, useEffect)",
      "Développer avec Tailwind CSS pour un prototypage ultra rapide",
      "Construire une application multi-pages optimisée avec Next.js",
    ],
    curriculum: [
      {
        module: "Module 1 : Fondamentaux de React moderne",
        description:
          "JSX, composants fonctionnels, props, transmission de données et rendu conditionnel.",
      },
      {
        module: "Module 2 : Hooks & Gestion de l'état",
        description:
          "useState, formulaires contrôlés, interactions dynamiques et gestion des listes.",
      },
      {
        module: "Module 3 : Intégration d'APIs & Asynchronisme",
        description:
          "Consommer des données REST avec fetch, afficher des états de chargement et d'erreur.",
      },
      {
        module: "Module 4 : L'écosystème Next.js & Déploiement pro",
        description:
          "App Router, Server & Client Components, optimisation SEO et publication continue.",
      },
    ],
    finalProject:
      "Développement d'un tableau de bord de gestion ou d'un mini-catalogue de produits dynamique connecté à une API.",
  },
  {
    id: "outils-numeriques-bureautique",
    slug: "outils-numeriques-productivite-entrepreneurs",
    title: "Outils numériques & productivité pour entrepreneurs",
    badge: "Pratique & Métier",
    level: "Tous niveaux",
    duration: "3 semaines (20 heures)",
    format: "Présentiel (Conakry)",
    shortDescription:
      "Maîtrisez les outils incontournables du quotidien (Google Workspace, Canva, Notion, sécurité) pour gagner un temps précieux dans votre activité.",
    longDescription:
      "Une formation concrète conçue sur mesure pour les entrepreneurs, commerçants, secrétaires et porteurs de projet qui veulent automatiser leurs tâches, gérer leurs documents dans le Cloud et soigner leurs présentations sans complexité.",
    targetAudience: [
      "Chefs d'entreprise, commerçants et gérants de PME",
      "Assistants administratifs et collaborateurs en charge de la communication",
      "Créateurs d'entreprise en cours d'installation",
    ],
    prerequisites: "Aucun prérequis technique particulier.",
    learningGoals: [
      "Collaborer efficacement en temps réel avec Google Docs, Sheets et Drive",
      "Créer des supports de communication attrayants sur Canva en quelques minutes",
      "Sécuriser ses comptes professionnels (mots de passe, authentification à deux facteurs)",
      "Organiser ses projets et ses contacts avec méthode",
    ],
    curriculum: [
      {
        module: "Module 1 : Le Cloud & la collaboration en direct",
        description:
          "Google Drive, gestion des partages, tableurs automatisés et formulaires en ligne.",
      },
      {
        module: "Module 2 : Création graphique simple & visuelle",
        description:
          "Canva pour les réseaux sociaux, cartes de visite express et bannières promotionnelles.",
      },
      {
        module: "Module 3 : Organisation personnelle & gestion de tâches",
        description:
          "Structurer son calendrier, gérer ses relances clients et classer ses dossiers numériques.",
      },
      {
        module: "Module 4 : Hygiène numérique & sécurité",
        description:
          "Sauvegardes automatiques, éviter le phishing et protéger ses accès sensibles.",
      },
    ],
    finalProject:
      "Kit numérique complet pour votre activité (modèle de facture, visuels types pour réseaux sociaux et dossier de classement Cloud).",
  },
];
