export interface CompanyInfo {
  name: string;
  tagline: string;
  baseline: string;
  slogan: string;
  description: string;
  fullBio: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappLink: string;
  address: {
    city: string;
    country: string;
    region: string;
    label: string;
  };
  socialLinks: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    github?: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  values: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const COMPANY_INFO: CompanyInfo = {
  name: "PROJEKTA",
  tagline: "Solutions numériques & Innovation digitale",
  baseline: "INNOVATION • TECHNOLOGY • PROJECTS",
  slogan: "Donnons vie à vos idées grâce au numérique.",
  description:
    "PROJEKTA vous accompagne dans le développement web et mobile, la création graphique, la communication digitale et la transformation numérique.",
  fullBio:
    "PROJEKTA est une initiative spécialisée dans les services numériques, le développement informatique, la création graphique et l'accompagnement des particuliers, entrepreneurs, organisations et entreprises en Guinée et à l'international dans leur transformation numérique.",
  email: "keithsorail@gmail.com",
  phone: "+224 624 28 48 74",
  phoneFormatted: "+224 624 28 48 74",
  whatsappNumber: "224624284874",
  whatsappLink: "https://wa.me/224624284874?text=Bonjour%20PROJEKTA%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20num%C3%A9riques.",
  address: {
    city: "Conakry",
    country: "Guinée",
    region: "Afrique de l'Ouest & International",
    label: "Conakry, République de Guinée (Interventions locales & internationales)",
  },
  socialLinks: {
    // Liens réseaux sociaux réservés aux pages certifiées et confirmées par l'équipe
  },
  metrics: [
    {
      value: "5",
      label: "Pôles d'expertise",
      description: "Du code au design en passant par la communication",
    },
    {
      value: "Sur-mesure",
      label: "Accompagnement dédié",
      description: "Une méthodologie collaborative étape par étape",
    },
    {
      value: "Réactive",
      label: "Réactivité",
      description: "Étude attentive de chaque besoin exprimé",
    },
    {
      value: "International",
      label: "Rayonnement",
      description: "Clients en Guinée, dans la diaspora et à l'international",
    },
  ],
  values: [
    {
      title: "Excellence & Rigueur",
      description:
        "Nous appliquons les meilleures pratiques de développement et de design pour des livrables robustes et soignés.",
      icon: "ShieldCheck",
    },
    {
      title: "Proximité & Écoute",
      description:
        "Chaque client est unique. Nous prenons le temps de comprendre vos enjeux avant d'écrire la moindre ligne de code.",
      icon: "HeartHandshake",
    },
    {
      title: "Créativité & Innovation",
      description:
        "Allier esthétique percutante et technologies de pointe pour démarquer votre image et vos outils.",
      icon: "Sparkles",
    },
    {
      title: "Orientation Résultats",
      description:
        "Votre succès numérique est notre boussole : génération de prospects, ergonomie soignée et valorisation de marque.",
      icon: "TrendingUp",
    },
  ],
};
