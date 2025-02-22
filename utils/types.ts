import { IconType } from "react-icons";

export type NavLink = {
  key: string;
  href: string;
  label: string;
  icon: IconType;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

export type CarouselItem = {
  src: string;
  name: string;
  heading: string;
  spanText: string;
  description: string;
  link: string;
  fancyText: string;
};
export type VisibleSection = "about" | "experience" | "projects" | "skills";

export type BannerItem = {
  heading: VisibleSection;
  src: string;
};

export type AboutStats = {
  title: string;
  unit: string;
  quantity: string;
};

export type About = {
  title: string;
  description: string[];
  stats: AboutStats[];
};

export type ProjectCard = {
  heading: string;
  description: string;
  imageURL: string;
  projectLink: string;
  githubLink: string;
};

type Skills = {
  heading: string;
  skillsList: string[];
};
export type SkillItem = {
  heading: string;
  skills: Skills[];
};

export type CertificationCard = {
  provider: string;
  heading: string;
  description: string;
  imageURL: string;
  link: string;
};

export type ExperienceCard = {
  heading: string;
  position: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
};

export type WorkExperience = {
  heading : string,
  items : ExperienceCard[]
}

export type FooterItem = {
  heading: string;
  link: string;
  icon: IconType;
};
