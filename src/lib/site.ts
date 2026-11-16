/**
 * Configuration du domaine officiel et de l'URL canonique de PROJEKTA.
 * Règle de production : utilise la variable d'environnement NEXT_PUBLIC_SITE_URL en priorité.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://projekta-tech.com")
).replace(/\/$/, "");

export function getAbsoluteUrl(path: string = ""): string {
  if (!path || path === "/") return SITE_URL;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
