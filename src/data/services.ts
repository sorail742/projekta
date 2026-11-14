export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  color: string;
  prestations: string[];
  benefits: string[];
  deliverables: string[];
  targetAudience: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "dev-web-mobile",
    slug: "developpement-web-mobile",
    number: "01",
    title: "Développement web et mobile",
    shortDescription:
      "Conception et développement de sites vitrines, plateformes dynamiques, boutiques e-commerce et applications mobiles sur mesure.",
    fullDescription:
      "PROJEKTA accompagne les entreprises et porteurs de projet dans la conception et la réalisation de solutions numériques robustes, intuitives et adaptées aux exigences modernes du web et du mobile.",
    iconName: "Code2",
    color: "from-emerald-500 to-teal-700",
    prestations: [
      "Création de sites web professionnels",
      "Création de sites vitrines sur mesure",
      "Développement de plateformes web dynamiques",
      "Création de boutiques en ligne & e-commerce",
      "Développement de marketplaces",
      "Développement d'applications web sur mesure",
      "Développement d'applications mobiles Android et iOS",
      "Maintenance, modernisation et amélioration de solutions existantes",
    ],
    benefits: [
      "Code propre, sécurisé et évolutif",
      "Responsive design parfait (mobile, tablette, écran large)",
      "Optimisation SEO et temps de chargement ultra-rapide",
      "Autonomie d'administration ou support clé en main",
    ],
    deliverables: [
      "Architecture logicielle & base de données",
      "Interface utilisateur réactive",
      "Intégration des passerelles de paiement ou formulaires",
      "Déploiement en ligne et documentation d'utilisation",
    ],
    targetAudience: [
      "Entreprises souhaitant digitaliser leur activité",
      "Startups & porteurs d'idées novatrices",
      "Commerçants voulant vendre en ligne",
    ],
  },
  {
    id: "graphisme-identite",
    slug: "creation-graphique-identite-visuelle",
    number: "02",
    title: "Création graphique et identité visuelle",
    shortDescription:
      "Logos mémorables, chartes graphiques complètes, cartes de visite et supports publicitaires pour asseoir votre crédibilité.",
    fullDescription:
      "PROJEKTA accompagne les marques, institutions et créateurs dans la conception d'une identité visuelle percutante, harmonieuse et mémorable qui inspire confiance dès le premier regard.",
    iconName: "Palette",
    color: "from-teal-600 to-emerald-800",
    prestations: [
      "Création de logos professionnels",
      "Création de chartes et identités visuelles complètes",
      "Modernisation et refonte de logos existants",
      "Conception de flyers publicitaires",
      "Création d'affiches promotionnelles",
      "Conception de cartes de visite professionnelles",
      "Création de supports de communication visuelle (kakemonos, brochures, bannières)",
    ],
    benefits: [
      "Identité unique qui se démarque de la concurrence",
      "Fichiers sources vectoriels prêts pour l'impression haute définition",
      "Déclinaisons pour le web et les réseaux sociaux",
      "Guide d'utilisation de la marque (typographies, palettes, règles)",
    ],
    deliverables: [
      "Pack logos (SVG, PNG transparent, PDF vectoriel)",
      "Charte graphique (guide de style)",
      "Fichiers d'impression haute résolution avec fonds perdus",
      "Mockups de présentation en situation réelle",
    ],
    targetAudience: [
      "Entrepreneurs en phase de lancement de marque",
      "Entreprises souhaitant moderniser leur image",
      "Organisations événementielles et culturelles",
    ],
  },
  {
    id: "portfolio-presence",
    slug: "portfolios-presence-numerique",
    number: "03",
    title: "Portfolios et présence numérique",
    shortDescription:
      "Mise en valeur élégante de vos compétences, projets et parcours professionnel pour maximiser votre impact auprès des recruteurs et clients.",
    fullDescription:
      "PROJEKTA aide les professionnels, consultants, freelances, artistes et étudiants à valoriser leur image sur Internet à travers des portfolios haut de gamme et des profils percutants.",
    iconName: "Briefcase",
    color: "from-emerald-600 to-green-700",
    prestations: [
      "Création de portfolios personnels",
      "Création de portfolios d'entreprises et d'agences",
      "Présentation interactive des compétences et expériences",
      "Valorisation dynamique des projets et réalisations",
      "Création de pages professionnelles personnalisées",
      "Amélioration et harmonisation de la présence numérique existante",
    ],
    benefits: [
      "Augmentation directe de votre crédibilité professionnelle",
      "Possibilité d'ajouter un CV téléchargeable et prise de contact instantanée",
      "Nom de domaine personnalisé à votre nom ou marque",
      "Design interactif mettant vos réalisations au premier plan",
    ],
    deliverables: [
      "Site portfolio responsive et élégant",
      "Galerie dynamique de projets avec filtres",
      "Section biographie et parcours professionnel",
      "Lien direct vers vos réseaux professionnels et WhatsApp",
    ],
    targetAudience: [
      "Consultants, indépendants et freelances",
      "Créatifs, photographes, architectes, designers",
      "Jeunes diplômés et cadres cherchant de nouvelles opportunités",
    ],
  },
  {
    id: "reseaux-sociaux-comm",
    slug: "gestion-reseaux-sociaux-communication",
    number: "04",
    title: "Gestion des réseaux sociaux & communication digitale",
    shortDescription:
      "Stratégie de contenu, création de visuels captivants et accompagnement pour faire rayonner votre marque sur Facebook, Instagram, LinkedIn, TikTok.",
    fullDescription:
      "PROJEKTA accompagne les entreprises et personnalités dans le développement de leur communication numérique pour capter l'attention de leur audience et convertir des abonnés en clients fidèles.",
    iconName: "Share2",
    color: "from-emerald-700 to-teal-900",
    prestations: [
      "Accompagnement dans la gestion de pages professionnelles",
      "Création de calendriers de contenus pour les réseaux sociaux",
      "Conception de publications visuelles et infographies",
      "Création de contenus promotionnels et bannières publicitaires",
      "Accompagnement stratégique et positionnement de marque",
      "Conseils personnalisés pour développer la visibilité numérique",
    ],
    benefits: [
      "Régularité et cohérence visuelle sur tous vos canaux",
      "Gain de temps précieux pour vous concentrer sur votre cœur de métier",
      "Engagement accru de votre communauté et valorisation de vos offres",
      "Alignement avec les codes algorithmiques de chaque réseau",
    ],
    deliverables: [
      "Grille de publications mensuelle / bi-mensuelle",
      "Pack de visuels aux dimensions exactes des réseaux (posts & stories)",
      "Rédaction des accroches textuelles (copywriting)",
      "Recommandations de diffusion et ciblage",
    ],
    targetAudience: [
      "PME et commerces locaux voulant attirer plus de clients",
      "Organisations associatives souhaitant sensibiliser",
      "Personnalités et marques en quête de notoriété",
    ],
  },
  {
    id: "formations-informatique",
    slug: "formations-accompagnement-informatique",
    number: "05",
    title: "Formations et accompagnement informatique",
    shortDescription:
      "Initiations pratiques au code, au développement web frontend/backend et aux outils numériques pour débutants, étudiants et curieux.",
    fullDescription:
      "PROJEKTA propose des initiations et des programmes d'accompagnement pratique conçus pour rendre les compétences numériques accessibles, concrètes et immédiatement applicables.",
    iconName: "GraduationCap",
    color: "from-teal-700 to-emerald-950",
    prestations: [
      "Initiation à la programmation et aux algorithmes",
      "Initiation au développement web moderne",
      "Apprentissage des bases du frontend (HTML, CSS, JavaScript) et backend",
      "Découverte des technologies de développement contemporaines",
      "Accompagnement sur mesure des grands débutants",
      "Exercices pratiques et réalisation pas-à-pas de petits projets",
      "Initiation aux outils numériques et à la productivité informatique",
    ],
    benefits: [
      "Pédagogie bienveillante axée sur la pratique par le projet",
      "Mentorat attentif avec suivi individualisé",
      "Découverte des métiers du numérique et opportunités du secteur",
      "Support de cours clairs et exercices corrigés",
    ],
    deliverables: [
      "Sessions interactives de formation (en présentiel ou distanciel)",
      "Projets concrets codés par l'apprenant pour son portfolio",
      "Supports pédagogiques et résumés pratiques",
      "Attestation de participation et d'acquisition de compétences",
    ],
    targetAudience: [
      "Débutants absolus souhaitant comprendre l'informatique",
      "Étudiants et jeunes diplômés voulant se perfectionner",
      "Professionnels en reconversion ou désireux d'automatiser leurs tâches",
    ],
  },
];
