import type { NextConfig } from "next";

// Pin the workspace root to this project directory so Turbopack doesn't get
// confused by stray package-lock.json files in parent dirs. Hardcoded
// absolute path (instead of import.meta.url / __dirname) so it works
// regardless of how Next compiles this config file.
const nextConfig: NextConfig = {
  turbopack: {
    root: "/Users/matthewpark/Downloads/current-projects/viral-besties-site",
  },
};

export default nextConfig;
