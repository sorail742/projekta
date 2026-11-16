export type ProjectStatus = "Réalisé" | "En cours" | "Concept";

export interface ProjectItem {
  id: string;
  titre: string;
  categorie: string;
  statut: ProjectStatus;
  description: string;
  imageReelle: string;
  lien?: string;
  autorisationPublication: boolean;
}

export const CATEGORIES_LIST = [
  { id: "all", label: "Tous les projets" },
  { id: "web", label: "Développement Web" },
  { id: "mobile", label: "Applications Mobiles" },
  { id: "branding", label: "Identité Visuelle" },
  { id: "design", label: "Communication Graphique" },
  { id: "digital", label: "Projets Numériques" },
];

/**
 * Registre unique des réalisations PROJEKTA.
 * Règle stricte de crédibilité :
 * Seuls les projets disposant d'une 'autorisationPublication: true'
 * ET d'une capture réelle ('imageReelle') sont affichés publiquement.
 */
export const PROJECTS_DATA: ProjectItem[] = [];
