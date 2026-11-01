// Projects shown in the "Selected work" grid, in display order.
// To add a project:
//   1. Drop a screenshot into src/assets/projects/ (square images look best).
//   2. Copy an object below and set `image` to that file name.
// Empty fields ("" or []) are hidden automatically.
// The ↗ button next to the title opens `live`, or `repo` if there is no live link.
//
// {
//   title: "Project name",
//   meta: "Short type label",
//   image: "file-name.webp",
//   description: "One or two lines on what it does.",
//   tags: ["React", "Node.js"],
//   live: "https://...",
//   repo: "https://github.com/...",
// }

export const projects = [
  {
    title: "Rentify",
    meta: "Rental platform",
    image: "rentify.webp",
    description:
      "A full-stack rental platform with property listings, JWT authentication, advanced search filters, Cloudinary image uploads, SendGrid emails and admin tools.",
    tags: ["React", "Node.js", "Express.js"],
    live: "https://rentify-houserent.netlify.app/",
    repo: "",
  },
  {
    title: "Delicious",
    meta: "Recipe finder",
    image: "delicious.webp",
    description:
      "A recipe search app powered by the Edamam API: look up any dish and browse recipes by breakfast, lunch, dinner and snacks.",
    tags: ["JavaScript", "Tailwind CSS", "REST API"],
    live: "https://delicious-dish-recipe.netlify.app/",
    repo: "",
  },
  {
    title: "MovieVerse",
    meta: "Movie search",
    image: "movieverse.webp",
    description:
      "Search movies by name and browse Tamil, Indian, trending and latest titles with ratings and release years, powered by the TMDB API.",
    tags: ["React", "TMDB API"],
    live: "https://movieverse-list.netlify.app/",
    repo: "",
  },
  {
    title: "FitClub",
    meta: "Fitness landing page",
    image: "fitclub.webp",
    description:
      "A bold, mobile-first landing page for a gym, with programs, classes and pricing sections.",
    tags: ["HTML", "Tailwind CSS"],
    live: "https://fitclub-gymclass.netlify.app/",
    repo: "",
  },
  {
    title: "Job Portal",
    meta: "Jobs platform",
    image: "jobs.webp",
    description:
      "A job admin dashboard to create and publish jobs, with real-time search, range-slider filters and debounced input.",
    tags: ["React", "Tailwind CSS"],
    live: "https://create-jobs.vercel.app/",
    repo: "",
  },
];
