export type ProjectCategory =
  | "all"
  | "web"
  | "mobile"
  | "branding"
  | "design"
  | "digital";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  status: "Terminé" | "Prototype" | "En production";
}

export const CATEGORIES_LIST: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "Toutes les réalisations" },
  { id: "web", label: "Développement Web" },
  { id: "mobile", label: "Applications Mobiles" },
  { id: "branding", label: "Identité Visuelle" },
  { id: "design", label: "Communication Graphique" },
  { id: "digital", label: "Projets Numériques" },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "conakry-market-hub",
    slug: "conakry-market-hub",
    title: "Conakry Market Hub",
    category: "web",
    categoryLabel: "Développement Web",
    client: "Plateforme Commerce Guinée",
    year: "2026",
    summary:
      "Plateforme web moderne de commerce et mise en relation directe pour les commerçants et artisans locaux.",
    description:
      "Conception intégrale d'un portail e-commerce performant et optimisé pour les connexions mobiles guinéennes, intégrant un catalogue dynamique et une commande fluide via WhatsApp.",
    challenge:
      "Créer une solution ultra légère, facile à charger sur réseaux 3G/4G, avec une interface intuitive en français pour les acheteurs et vendeurs locaux.",
    solution:
      "Architecture Next.js avec rendu hybride, images ultra compressées et routage direct des paniers vers les comptes WhatsApp des vendeurs.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "E-commerce", "WhatsApp API"],
    features: [
      "Catalogue produits avec recherche instantanée",
      "Filtres par catégories et quartiers de Conakry",
      "Génération automatique du bon de commande WhatsApp",
      "Espace commerçant épuré",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://projekta-tech.com/demo/market",
    status: "Terminé",
  },
  {
    id: "sahel-fintech-app",
    slug: "sahel-fintech-app",
    title: "Kori Pay - Interface Mobile",
    category: "mobile",
    categoryLabel: "Applications Mobiles",
    client: "Prototype Fintech",
    year: "2026",
    summary:
      "Application mobile de transfert et suivi des micro-transactions conçue avec une ergonomie simplifiée.",
    description:
      "Création du design UI/UX et du prototype interactif d'une application mobile fintech permettant de gérer un portefeuille électronique et de suivre ses flux financiers au quotidien.",
    challenge:
      "Rendre les transferts d'argent visuels et limpides pour des utilisateurs novices, en limitant le nombre de clics pour chaque transaction.",
    solution:
      "Parcours utilisateur en 2 étapes, notifications visuelles avec code couleur contrasté et sécurité renforcée par code PIN et biométrie.",
    tags: ["React Native", "UI/UX Design", "Figma", "Fintech", "Mobile"],
    features: [
      "Tableau de bord synthétique des dépenses",
      "Transferts instantanés par QR code",
      "Historique téléchargeable en un clic",
      "Mode hors ligne pour consultation de solde",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    status: "Prototype",
  },
  {
    id: "guinea-agro-identity",
    slug: "guinea-agro-identity",
    title: "Bafing Agro & Bio",
    category: "branding",
    categoryLabel: "Identité Visuelle",
    client: "Société Agroalimentaire",
    year: "2025",
    summary:
      "Création complète de l'identité de marque, du logotype vectoriel et de la charte graphique pour une coopérative agricole.",
    description:
      "Conception d'une marque valorisant les richesses du terroir et la fraîcheur des produits agricoles guinéens, combinant modernité et symboles traditionnels de fertilité.",
    challenge:
      "Transmettre à la fois le respect de la terre et les ambitions d'exportation internationale de la marque.",
    solution:
      "Typographie équilibrée, palette associant vert feuillage et ocre doré, guide d'usage complet et déclinaisons packaging pour sachets et cartons.",
    tags: ["Branding", "Logo Design", "Charte Graphique", "Packaging", "Illustrator"],
    features: [
      "Logotype principal et déclinaisons horizontales/verticales",
      "Palette colorimétrique normalisée (CMJN, RVB, Pantone)",
      "Typographies d'accompagnement et règles d'exclusion",
      "Gabarits packaging pour l'étiquetage alimentaire",
    ],
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=1200&q=80",
    status: "Terminé",
  },
  {
    id: "cabinet-avocats-vitrine",
    slug: "cabinet-avocats-vitrine",
    title: "Cabinet Juris Conakry",
    category: "web",
    categoryLabel: "Développement Web",
    client: "Cabinet d'Avocats d'Affaires",
    year: "2026",
    summary:
      "Site vitrine institutionnel élégant, sobre et rassurant pour un cabinet juridique intervenant en droit des affaires.",
    description:
      "Développement d'un site web corporate bilingue avec présentation des associés, publication d'articles d'analyse juridique et prise de rendez-vous en ligne.",
    challenge:
      "Offrir une image de prestige et d'intégrité absolue tout en permettant aux investisseurs internationaux de consulter les domaines de compétence en un coup d'œil.",
    solution:
      "Design épuré en teintes sombres et vert émeraude, typographie à empattement prestigieuse et formulaire de contact chiffré.",
    tags: ["Next.js", "Tailwind CSS", "SEO", "Responsive", "Accessibilité"],
    features: [
      "Fiches détaillées des domaines d'intervention",
      "Portraits et biographies des avocats",
      "Espace revues & actualités juridiques",
      "Prise de contact confidentielle sécurisée",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://projekta-tech.com/demo/juris",
    status: "Terminé",
  },
  {
    id: "campagne-social-media-tech",
    slug: "campagne-social-media-tech",
    title: "Campagne Visuelle « Guinée Digitale »",
    category: "design",
    categoryLabel: "Communication Graphique",
    client: "Événement Tech Conakry",
    year: "2025",
    summary:
      "Création de la série d'affiches, bannières et visuels réseaux sociaux pour promouvoir l'innovation numérique auprès des jeunes.",
    description:
      "Direction artistique et conception d'un pack de 20 visuels dynamiques pour LinkedIn, Facebook et Instagram, générant plus de 45 000 impressions organiques.",
    challenge:
      "Capter l'attention des jeunes professionnels et étudiants sur les flux saturés des réseaux sociaux avec un style fort et dynamique.",
    solution:
      "Visuels percutants aux contrastes vifs, accroches en typographie grasse et infographies digestes valorisant les compétences de demain.",
    tags: ["Social Media", "Photoshop", "Canva Pro", "Infographies", "Marketing"],
    features: [
      "Formats adaptés pour posts carrés, stories et bannières",
      "Modèles éditables réutilisables par le client",
      "Cohérence graphique stricte sur toutes les plateformes",
      "Taux d'engagement moyen supérieur à 7,8%",
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    status: "Terminé",
  },
  {
    id: "consultant-portfolio-pro",
    slug: "consultant-portfolio-pro",
    title: "Portfolio Dr. M. Diallo",
    category: "digital",
    categoryLabel: "Projets Numériques",
    client: "Consultant International en Stratégie",
    year: "2026",
    summary:
      "Site portfolio individuel haut de gamme mettant en scène 15 années d'expertise et de publications en Afrique de l'Ouest.",
    description:
      "Création d'une vitrine personnelle comprenant un résumé exécutif, un carrousel de missions réalisées, des liens vers les publications scientifiques et une prise de contact directe.",
    challenge:
      "Mettre en valeur un profil d'expert international auprès des bailleurs de fonds et institutions panafricaines.",
    solution:
      "Interface mono-page fluide avec sections repliables, version imprimable du CV en un clic et temps de chargement inférieur à 0,8 seconde.",
    tags: ["Portfolio", "Next.js", "Clean Code", "Personal Branding", "Fast Loading"],
    features: [
      "Téléchargement du CV professionnel au format PDF",
      "Timeline chronologique interactive des missions",
      "Catalogue des conférences et tribunes",
      "Bouton WhatsApp pour échanges directs avec l'assistant",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "https://projekta-tech.com/demo/portfolio-diallo",
    status: "Terminé",
  },
];
