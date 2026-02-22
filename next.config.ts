const repo = 'Ariadna';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',              // genera /out
  images: { unoptimized: true }, // GitHub Pages no soporta el optimizador por defecto
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
