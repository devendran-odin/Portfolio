import { PiCode, PiCloudArrowUp } from "react-icons/pi";

// Group icons that can be used in src/data/skills.js (`icon: "..."`).
export const ICONS = {
  code: PiCode,
  cloudUp: PiCloudArrowUp,
};

// Every logo in src/assets/skills/ is bundled; skills.js refers to them by file name.
const logos = import.meta.glob("../assets/skills/*", {
  eager: true,
  import: "default",
});
export const logoFor = (file) => logos[`../assets/skills/${file}`];
