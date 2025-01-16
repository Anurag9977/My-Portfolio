import {
  //   About,
  //   BannerItem,
  //   CarouselItem,
  //   CertificationCard,
  //   ExperienceCard,
  FooterItem,
  NavLink,
  //   ProjectCard,
  //   SkillItem,
  //   User,
} from "./types";
import {
  LuMail,
  LuMapPin,
  LuLinkedin,
  LuTwitter,
  LuHouse,
  LuUser,
  LuCodeXml,
  LuBriefcaseBusiness,
  LuLayers3,
  LuGithub,
} from "react-icons/lu";
// import profileImg from "@/assets/images/profile.jpg";
// import carousel1 from "@/assets/images/carousel/carousel1.jpeg";
// import carousel2 from "@/assets/images/carousel/carousel2.jpg";
// import carousel3 from "@/assets/images/carousel/carousel3.jpg";
// import carousel4 from "@/assets/images/carousel/carousel4.jpg";
// import banner1 from "@/assets/images/banners/banner1.jpg";
// import banner2 from "@/assets/images/banners/banner2.jpg";
// import banner3 from "@/assets/images/banners/banner3.jpg";
// import banner4 from "@/assets/images/banners/banner4.png";
// import project1 from "@/assets/images/projects/project1.jpeg";
// import project2 from "@/assets/images/projects/project2.png";
// import certificate1 from "@/assets/images/certificate/certificate1.png";
// import certificate2 from "@/assets/images/certificate/certificate2.jpg";

export const navLinks: NavLink[] = [
  {
    key: "home",
    href: "#home",
    label: "home",
    icon: LuHouse,
  },
  {
    key: "about",
    href: "#about",
    label: "about",
    icon: LuUser,
  },
  {
    key: "experience",
    href: "#experience",
    label: "experience / resume",
    icon: LuBriefcaseBusiness,
  },
  {
    key: "projects",
    href: "#projects",
    label: "projects",
    icon: LuLayers3,
  },
  {
    key: "skills",
    href: "#skills",
    label: "skills",
    icon: LuCodeXml,
  },
];

// export const user: User = {
//   name: "shadcn",
//   email: "m@example.com",
//   avatar: profileImg.src,
// };

// export const carouselItems: CarouselItem[] = [
//   {
//     name: "carousel1",
//     src: carousel1.src,
//     heading: "design and",
//     spanText: "development",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi consequuntur culpa dolorum ducimus enim fugiat fugit illo nesciunt porro velit.",
//     fancyText: "web-design",
//     link: "#",
//   },
//   {
//     name: "carousel2",
//     src: carousel2.src,
//     heading: "full stack",
//     spanText: "development",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi consequuntur culpa dolorum ducimus enim fugiat fugit illo nesciunt porro velit.",
//     fancyText: "web-design",
//     link: "#",
//   },
//   {
//     name: "carousel3",
//     src: carousel3.src,
//     heading: "database",
//     spanText: "management system",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi consequuntur culpa dolorum ducimus enim fugiat fugit illo nesciunt porro velit.",
//     fancyText: "web-design",
//     link: "#",
//   },
//   {
//     name: "carousel4",
//     src: carousel4.src,
//     heading: "ui",
//     spanText: "development",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Commodi consequuntur culpa dolorum ducimus enim fugiat fugit illo nesciunt porro velit.",
//     fancyText: "web-design",
//     link: "#",
//   },
// ];

// export const bannerItems: BannerItem[] = [
//   {
//     heading: "about",
//     src: banner1.src,
//   },
//   {
//     heading: "experience",
//     src: banner2.src,
//   },
//   {
//     heading: "projects",
//     src: banner3.src,
//   },
//   {
//     heading: "skills",
//     src: banner4.src,
//   },
// ];

// export const aboutMe: About = {
//   title: "about me",
//   description: [
//     "Detail-oriented and Aspiring Software Developer possessing a B. Tech. degree in Information Technology with 1.5 years of experience as an Analyst in Finance and Enterprise Performance.",
//     "Aiming for opportunities to build my carrier that would help me in achieving greater practical excellence in software industry.",
//     "Driven towards working hard along with good communication skills to explore the requirements and come up with innovative solutions.",
//   ],
//   stats: [
//     {
//       title: "years of experience",
//       unit: "thousand",
//       quantity: "3",
//     },
//     {
//       title: "team",
//       unit: "people",
//       quantity: "50",
//     },
//     {
//       title: "prod releases",
//       unit: "initiatives",
//       quantity: "10",
//     },
//     {
//       title: "lines of code",
//       unit: "thousand",
//       quantity: "100",
//     },
//   ],
// };

// export const statsAboutMe: AboutStats[] = [
//   {
//     title: "years of experience",
//     unit: "thousand",
//     quantity: "3",
//   },
//   {
//     title: "team",
//     unit: "people",
//     quantity: "50",
//   },
//   {
//     title: "prod releases",
//     unit: "initiatives",
//     quantity: "10",
//   },
//   {
//     title: "lines of code",
//     unit: "thousand",
//     quantity: "100",
//   },
// ];

// export const projectsList: ProjectCard[] = [
//   {
//     heading: "airbnb clone",
//     description: "Next JS | Shadcn | Prisma | Supabase",
//     imageURL: project1.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
//   {
//     heading: "google drive clone",
//     description: "Next JS | Shadcn | AppWrite",
//     imageURL: project2.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
//   {
//     heading: "twitter clone",
//     description: "Next JS | Shadcn | Prisma | Supabase",
//     imageURL: project1.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
//   {
//     heading: "image sharing app",
//     description: "Next JS | Shadcn | AppWrite",
//     imageURL: project2.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
//   {
//     heading: "github users",
//     description: "Next JS | Shadcn | Prisma | Supabase",
//     imageURL: project1.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
//   {
//     heading: "store project",
//     description: "Next JS | Shadcn | AppWrite",
//     imageURL: project2.src,
//     githubLink: "#",
//     projectLink: "#",
//   },
// ];

// export const skillsList: SkillItem[] = [
//   {
//     heading: "technical skills",
//     skills: [
//       {
//         heading: "programming languages",
//         skillsList: ["C/C++", "JavaScript"],
//       },
//       {
//         heading: "web frameworks",
//         skillsList: ["NextJS", "ReactJS", "NodeJS", "Express"],
//       },
//       {
//         heading: "databases",
//         skillsList: ["MySQL", "PostgreSQL", "MongoDB"],
//       },
//     ],
//   },
//   {
//     heading: "tools",
//     skills: [
//       {
//         heading: "tools",
//         skillsList: ["Postman", "JIRA", "MS-Excel"],
//       },
//       {
//         heading: "version control",
//         skillsList: ["Git"],
//       },
//     ],
//   },
//   {
//     heading: "soft skills",
//     skills: [
//       {
//         heading: "soft skills",
//         skillsList: ["Adaptation", "Passionate", "Enthusiastic"],
//       },
//     ],
//   },
// ];

// export const certificationsList: CertificationCard[] = [
//   {
//     provider: "udemy",
//     heading: "C++, Zero to Mastery 2024",
//     imageURL: certificate1.src,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt! Maxime voluptate id aliquam dolorum totam? Illo quia dignissimos iusto officiis, ipsum asperiores aperiam doloribus necessitatibus sequi, dicta, eveniet quod!",
//     link: "#",
//   },
//   {
//     provider: "coursera",
//     heading: "NextJS, Basic to Advanced 2024",
//     imageURL: certificate2.src,
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt! Maxime voluptate id aliquam dolorum totam? Illo quia dignissimos iusto officiis, ipsum asperiores aperiam doloribus necessitatibus sequi, dicta, eveniet quod!",
//     link: "#",
//   },
// ];

// export const experience: ExperienceCard[] = [
//   {
//     heading: "experience",
//     position: "consultant",
//     company: "Deloitte USI Consulting",
//     period: "2021-2024",
//     details: [
//       "Worked on a client facing project for over 1.5 years under Finance and Enterprise performance.",
//       "Communicated with the client on business requirements and developed business models on a platform called Anaplan used for Analysis and Financial Planning.",
//       "Contributed to the project as part of the team that worked on building and analysing Variance reports for the data flow across 16 business models within the project landscape.",
//     ],
//     skills: ["ReactJS", "Anaplan", "MS Excel", "JIRA"],
//   },
//   {
//     heading: "education",
//     position: "B.Tech.(IT)",
//     company: "National Institute of Technology, Raipur",
//     period: "2017-2021",
//     details: [
//       "Bachelor of Technology | Information Technology",
//       "Awards/Recognitions: Honours in Information Technology (CPI: 8.70)",
//     ],
//     skills: [
//       "Data Structures & Algorithms",
//       "Computer Architecture",
//       "Theory of Computers",
//     ],
//   },
// ];

export const footerItems: FooterItem[] = [
  {
    heading: "email",
    link: process.env.NEXT_PUBLIC_EMAIL_ADDRESS!,
    icon: LuMail,
  },
  {
    heading: "address",
    link: "#",
    icon: LuMapPin,
  },
];

export const socials: FooterItem[] = [
  {
    heading: "github",
    link: process.env.NEXT_PUBLIC_GITHUB_URL!,
    icon: LuGithub,
  },
  {
    heading: "linkedin",
    link: process.env.NEXT_PUBLIC_GITHUB_URL!,
    icon: LuLinkedin,
  },
  {
    heading: "twitter",
    link: process.env.NEXT_PUBLIC_TWITTER_URL!,
    icon: LuTwitter,
  },
];
