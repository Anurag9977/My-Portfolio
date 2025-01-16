"use client";

import { useEffect, useRef, useState } from "react";
import BannerContainer from "../banner/BannerContainer";
import About from "../sections/About";
import Projects from "../sections/Projects";
import { useScroll } from "motion/react";
import {
  About as AboutType,
  BannerItem,
  CertificationCard,
  ExperienceCard,
  ProjectCard,
  SkillItem,
  VisibleSection,
} from "@/utils/types";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Navbar from "../navbar/Navbar";

type SectionContainerProps = {
  bannerImages: BannerItem[];
  aboutMe: AboutType;
  experience: ExperienceCard[];
  resume: string;
  projects: ProjectCard[];
  skills: SkillItem[];
  certificates: CertificationCard[];
};

function SectionContainer({
  bannerImages,
  aboutMe,
  experience,
  resume,
  projects,
  skills,
  certificates,
}: SectionContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visibleSection, setVisibleSection] = useState<VisibleSection>("about");
  const { scrollY } = useScroll();

  useEffect(() => {
    function checkPosition() {
      if (scrollRef.current) {
        const rect = scrollRef.current?.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        // Trigger animation when the element top reaches a certain position
        if (
          elementTop + 100 < window.innerHeight &&
          elementBottom > window.innerHeight
        ) {
          setInView(true);
        } else setInView(false);
      }
      if (aboutSectionRef.current) {
        const rect = aboutSectionRef.current?.getBoundingClientRect();
        const elementTop = rect.top;
        // Trigger animation when the element top reaches a certain position
        if (elementTop + 200 < window.innerHeight) {
          setVisibleSection("about");
        }
      }
      if (experienceSectionRef.current) {
        const rect = experienceSectionRef.current?.getBoundingClientRect();
        const elementTop = rect.top;
        // Trigger animation when the element top reaches a certain position
        if (elementTop + 200 < window.innerHeight) {
          setVisibleSection("experience");
        }
      }
      if (projectsSectionRef.current) {
        const rect = projectsSectionRef.current?.getBoundingClientRect();
        const elementTop = rect.top;
        // Trigger animation when the element top reaches a certain position
        if (elementTop + 200 < window.innerHeight) {
          setVisibleSection("projects");
        }
      }
      if (skillsSectionRef.current) {
        const rect = skillsSectionRef.current?.getBoundingClientRect();
        const elementTop = rect.top;
        // Trigger animation when the element top reaches a certain position
        if (elementTop + 200 < window.innerHeight) {
          setVisibleSection("skills");
        }
      }
    }
    // Add scroll listener
    window.addEventListener("scroll", checkPosition);
    // Clean up
    return () => {
      window.removeEventListener("scroll", checkPosition);
    };
  }, [scrollY]);

  return (
    <main className="xl:grid xl:grid-cols-12 relative">
      <section className="hidden xl:block xl:col-span-4 h-full">
        <BannerContainer
          bannerImages={bannerImages}
          inView={inView}
          visibleSection={visibleSection}
        />
      </section>
      <section className="xl:col-span-8" ref={scrollRef}>
        <Navbar visibleSection={visibleSection} />
        <About ref={aboutSectionRef} aboutMe={aboutMe} />
        <Experience
          ref={experienceSectionRef}
          experience={experience}
          resume={resume}
        />
        <Projects ref={projectsSectionRef} projects={projects} />
        <Skills
          ref={skillsSectionRef}
          skills={skills}
          certificates={certificates}
        />
      </section>
    </main>
  );
}
export default SectionContainer;
