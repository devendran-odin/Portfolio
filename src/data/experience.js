// Work experience — newest first. To add a role, copy an object to the TOP
// of the list and edit it. Empty fields ("" or []) are hidden automatically.
// If this list is empty, the Experience section and its nav link disappear.
//
// {
//   role: "Job title",
//   org: "Company",
//   dates: "Jan 2025 – Present",
//   location: "City / Remote",
//   points: ["What you did", "..."],
//   tags: ["Tech", "..."],
// }

export const experience = [
  {
    role: "System Engineer",
    org: "Tata Consultancy Services (TCS)",
    dates: "Jan 2026 – Present",
    location: "Chennai, India",
    points: [
      "Develop automation workflows using Groovy, Python, and Bash scripting.",
      "Work on AIOps capabilities, including infrastructure monitoring, profiling, and event management.",
      "Automate operational tasks through action execution and workflow orchestration.",
      "Configure automation components and integrate ITSM workflows for operational efficiency."
    ],
    tags: ["AIOps", "Groovy", "Python", "Bash", "Automation", "ITSM"]
  },
  {
    role: "DevOps Intern",
    org: "SentinelFox",
    dates: "Jul 2024 – Aug 2024",
    location: "Chennai, India",
    points: [
      "Worked with AWS services (EC2, VPC, and S3) to explore and manage cloud infrastructure.",
      "Used Terraform to automate infrastructure provisioning and manage resources as code.",
      "Containerised applications using Docker and managed container images through Docker Hub."
    ],
    tags: ["AWS", "Terraform", "Docker"]
  }
];
