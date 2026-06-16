import { accessSync } from "node:fs";
import { join } from "node:path";

const requiredAssets = [
  "public/logo/bluortensia-logo.svg",
  "public/images/mirto-ombrellone-macrame.png",
  "public/images/mirto-ombrellone-macrame-hero.png",
  "public/images/mirto-macrame-ristorante.png",
  "public/images/mirto-piscina.png",
  "public/images/mirto-macrame-mob.png",
];

const missing = [];

for (const asset of requiredAssets) {
  try {
    accessSync(join(process.cwd(), asset));
  } catch {
    missing.push(asset);
  }
}

if (missing.length > 0) {
  console.error(`Missing required public assets:\n${missing.map((asset) => `- ${asset}`).join("\n")}`);
  process.exit(1);
}

console.log("All required public assets exist.");
