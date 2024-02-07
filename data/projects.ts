import { ProjectType } from "@/types/project";
const js = {
  name: "javascript",
};
const react = {
  name: "react",
};
const wordrpess = {
  name: "wordrpess",
  url: "https://wordrpess.org/",
};
const tailwind = {
  name: "tailwind",
  url: "https://tailwind.com/",
};
const project: ProjectType[] = [
  {
    title: "Ngopi",
    image: require("public/projects/p1.png"),
    description:
      "A simple web built with javascript.",
    createdAt: "2021-12-02",
    technology: [js],
    url: "https://fuumasite.github.io/Ngopi/",
    source: "https://github.com/fuumasite/Ngopi",
  },
  {
    title: "Portfolio Tailwind",
    image: require("public/projects/p2.png"),
    description: "web portfolio with framework tailwind.",
    createdAt: "2021-01-01",
    technology: [tailwind],
    url: "https://fuumasite.github.io/Portofolio-Tailwind/",
    source: "https://github.com/fuumasite/Portofolio-Tailwind",
  },
  {
    title: "Portfolio Terminal",
    image: require("public/projects/p3.png"),
    description:
      "web terminal portfolio build with react js.",
    createdAt: "2020-08-19",
    technology: [js, react],
    url: "https://terminalbinggie.netlify.app",
  },
  {
    title: "Wordpress Blog",
    image: require("public/projects/p4.png"),
    description:
      "a wordpress blog for education and information.",
    createdAt: "2020-02-07",
    technology: [wordrpess],
    url: "https://bilearn.code.blog",
  },
 
];

export default project;
