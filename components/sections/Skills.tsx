import { RefObject } from "react";
import SectionWrapper from "../global/SectionWrapper";
import SectionTitle from "../global/SectionTitle";
import SkillsTab from "../skills/SkillsTab";
import { CertificationCard, SkillItem } from "@/utils/types";

function Skills({
  ref,
  skills,
  certificates,
}: {
  ref: RefObject<HTMLDivElement | null>;
  skills: SkillItem[];
  certificates: CertificationCard[];
}) {
  return (
    <section id="skills" ref={ref}>
      <SectionWrapper>
        <SectionTitle
          heading="skills & certifications"
          subHeading={`Feel free to toggle between Skills & Certifications to take a look at what I can offer."`}
          sectionNumber="04."
        />
        <section className="mt-8">
          <SkillsTab skills={skills} certificates={certificates} />
        </section>
      </SectionWrapper>
    </section>
  );
}
export default Skills;
