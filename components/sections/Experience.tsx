import { RefObject } from "react";
import SectionWrapper from "../global/SectionWrapper";
import SectionTitle from "../global/SectionTitle";
import ExperienceContent from "../experience/ExperienceContent";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExperienceCard } from "@/utils/types";

function Experience({
  ref,
  experience,
  resume,
}: {
  ref: RefObject<HTMLDivElement | null>;
  experience: ExperienceCard[];
  resume: string;
}) {
  return (
    <section id="experience" ref={ref}>
      <SectionWrapper>
        <SectionTitle
          heading="experience"
          subHeading="Below is a summary of my work experience and education."
          sectionNumber="02."
        />
        <section className="flex flex-col gap-y-8">
          {experience.map((item, index) => {
            return <ExperienceContent key={index} item={item} />;
          })}
        </section>
        <Button
          asChild
          size="lg"
          className="mt-8 capitalize tracking-wide text-base"
        >
          <Link href={resume} target="_blank">
            download resume
          </Link>
        </Button>
      </SectionWrapper>
    </section>
  );
}
export default Experience;
