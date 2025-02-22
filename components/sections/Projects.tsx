import { RefObject } from "react";
import SectionWrapper from "../global/SectionWrapper";
import SectionTitle from "../global/SectionTitle";
import ProjectCard from "../projects/ProjectCard";
import { ProjectCard as ProjectCardType } from "@/utils/types";

function Projects({
  ref,
  projects,
}: {
  ref: RefObject<HTMLDivElement | null>;
  projects: ProjectCardType[];
}) {
  return (
    <section id="projects" ref={ref}>
      <SectionWrapper>
        <SectionTitle
          heading="projects & open source"
          subHeading="My Top Projects listed below with Project Link & Source Code on Github."
          sectionNumber="03."
        />
        <section className="mt-8 grid md:grid-cols-2 gap-x-6 gap-y-8">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </section>
      </SectionWrapper>
    </section>
  );
}
export default Projects;
