export interface FaqItem {
  question: string;
  answer: string;
  category: "general" | "services" | "devis" | "formations" | "technologies";
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: "Qu'est-ce que PROJEKTA ?",
    answer:
      "PROJEKTA est une initiative spécialisée dans les services numériques, le développement web et mobile, la création graphique, la gestion des réseaux sociaux et la formation informatique. Nous accompagnons les entrepreneurs, PME, associations et particuliers en Guinée et à l'international dans leur transformation numérique.",
    category: "general",
  },
  {
    question: "Dans quels pays intervenez-vous ?",
    answer:
      "Notre ancrage principal est en République de Guinée (notamment à Conakry), mais nous travaillons régulièrement à distance avec des clients et entrepreneurs de la diaspora, de la sous-région ouest-africaine et à l'international grâce aux outils de collaboration modernes.",
    category: "general",
  },
  {
    question: "Comment se déroule la création d'un site web avec PROJEKTA ?",
    answer:
      "Notre processus s'articule en 5 étapes claires : 1. Prise de contact et écoute de vos besoins, 2. Analyse technique et proposition personnalisée avec devis, 3. Conception UI/UX et validation de la maquette, 4. Développement et tests rigoureux, 5. Livraison, mise en ligne et accompagnement à la prise en main.",
    category: "services",
  },
  {
    question: "Combien coûte un site web ou une prestation chez PROJEKTA ?",
    answer:
      "Chaque projet numérique étant unique (type de fonctionnalités, volume de pages, délais, complexité graphique), nous établissons un devis personnalisé sans engagement sous 24 à 48 heures. Vous pouvez faire une demande directement sur notre page 'Demander un devis'.",
    category: "devis",
  },
  {
    question: "Quels sont les délais moyens de réalisation ?",
    answer:
      "Pour un site vitrine standard ou une identité visuelle, comptez généralement entre 7 et 20 jours ouvrés selon la réactivité des échanges. Pour des plateformes plus complexes ou des applications mobiles sur mesure, un planning prévisionnel précis est établi dès la validation du cahier des charges.",
    category: "services",
  },
  {
    question: "Les formations sont-elles adaptées aux grands débutants ?",
    answer:
      "Absolument ! Nos modules d'initiation à la programmation et aux outils numériques sont spécialement pensés pour les personnes sans aucun bagage technique préalable. Notre pédagogie est progressive, bienveillante et axée sur des projets concrets.",
    category: "formations",
  },
  {
    question: "Puis-je modifier moi-même les contenus de mon site une fois livré ?",
    answer:
      "Oui. Selon vos préférences, nous configurons des interfaces d'administration simples ou nous vous formons à la gestion de vos contenus (textes, articles, images, coordonnées) afin de vous garantir une totale autonomie.",
    category: "services",
  },
  {
    question: "Comment puis-je échanger rapidement avec un responsable ?",
    answer:
      "Vous pouvez nous contacter directement sur WhatsApp via le bouton dédié sur le site, par téléphone au +224 624 28 48 74 ou en renseignant notre formulaire de contact.",
    category: "general",
  },
];
