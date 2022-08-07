/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  ...nextConfig,
  assetPrefix: isProd ? "https://nathen-smith.github.io/blog" : "",
  nextConfig,
  basePath: "/blog",
  images: {
    loader: "akamai",
    path: "",
    domains: ["http://i.annihil.us/u/prod/marvel/i/mg"],
  },
}
