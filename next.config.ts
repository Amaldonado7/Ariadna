const repo = "Ariadna";
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
};
