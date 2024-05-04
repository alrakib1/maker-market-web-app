/** @type {import('next').NextConfig} */
import path from "path";
import { dirname } from "path";

const __dirname = dirname(import.meta.url);
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./styles/base.scss";`,
  },
  images: {
    domains: ["res.cloudinary.com", "i.pinimg.com", "w7.pngwing.com"],
  },
};

export default nextConfig;
