/** Prefix public assets for GitHub Pages project URLs (homepage base path). */
export function asset(path) {
  const base = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
