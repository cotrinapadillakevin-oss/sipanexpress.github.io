/**
 * Helper utility to resolve asset paths reliably across development,
 * preview, and production environments (especially GitHub Pages sub-paths).
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Strip leading slash or dot-slash
  const clean = path.replace(/^\.?\//, '');
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;

  return `${prefix}${clean}`;
};

export default getAssetUrl;
