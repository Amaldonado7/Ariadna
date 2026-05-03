const repo = "Ariadna";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

export default {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  env: {
    // Expose computed basePath so components can prefix public asset paths.
    // next/image with unoptimized:true does NOT auto-apply basePath to src.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};
