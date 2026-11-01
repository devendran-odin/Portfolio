// Tech stack groups (About section) — the scrolling marquee is built from these too.
// To add a skill:
//   1. Drop its SVG logo into src/assets/skills/ (https://devicon.dev is a good source).
//   2. Add { name, logo: "file.svg" } to a group below.
// Optional: invert: true for dark logos that disappear on the dark background.

export const skillGroups = [
  {
    title: "Programming & Frameworks",
    sub: "Languages, frontend and backend",
    icon: "code",
    glow: "rgba(139,123,255,.18)",
    items: [
      { name: "HTML", logo: "html.svg" },
      { name: "CSS", logo: "css.svg" },
      { name: "Tailwind CSS", logo: "tailwind.svg" },
      { name: "Python", logo: "python.svg" },
      { name: "Java", logo: "java.svg" },
      { name: "JavaScript", logo: "javascript.svg" },
      { name: "React", logo: "react.svg" },
      { name: "Node.js", logo: "nodejs.svg" },
      { name: "Express.js", logo: "express.svg", invert: true },
      { name: "MySQL", logo: "mysql.svg" },
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    sub: "Infrastructure, automation and workflow",
    icon: "cloudUp",
    glow: "rgba(124,240,201,.14)",
    items: [
      { name: "AWS", logo: "aws.svg" },
      { name: "Linux", logo: "linux.svg", invert: true },
      { name: "Terraform", logo: "terraform.svg" },
      { name: "Docker", logo: "docker.svg" },
      { name: "Jenkins", logo: "jenkins.svg" },
      { name: "Git", logo: "git.svg" },
      { name: "GitHub", logo: "github.svg", invert: true },
      { name: "Postman", logo: "postman.svg" },
      { name: "VS Code", logo: "vscode.svg" },
      { name: "Cursor", logo: "cursor.svg", invert: true },
      { name: "Figma", logo: "figma.svg" },
    ],
  },
];
