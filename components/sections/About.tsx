import { RefObject } from "react";
import SectionTitle from "../global/SectionTitle";
import SectionWrapper from "../global/SectionWrapper";
import AboutStats from "../about/AboutStats";
import { About as AboutType } from "@/utils/types";

function About({
  ref,
  aboutMe,
}: {
  ref: RefObject<HTMLDivElement | null>;
  aboutMe: AboutType;
}) {
  return (
    <section id="about" ref={ref} className="pb-8">
      <SectionWrapper>
        <SectionTitle
          heading={aboutMe.title}
          subHeading="Something about myself."
          sectionNumber="01."
        />
        <section className="my-8">
          {aboutMe.description.map((item, index) => {
            return (
              <div key={index} className="flex gap-x-4 my-4">
                <span className="text-primary font-bold">&#183;</span>
                <p className="text-justify">{item}</p>
              </div>
            );
          })}
        </section>
      </SectionWrapper>
      <AboutStats stats={aboutMe.stats} />
    </section>
  );
}
export default About;
