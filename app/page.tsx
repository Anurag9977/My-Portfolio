import FooterContainer from "@/components/footer/FooterContainer";
import SectionContainer from "@/components/global/SectionContainer";
import CarouselWrapper from "@/components/home/CarouselWrapper";
import {
  getAboutMeDetails,
  getBannerImages,
  getCarouselItems,
  getCertificates,
  getExperienceDetails,
  getResume,
  getSkills,
  getTopProjects,
} from "@/utils/actions";
import { ExperienceCard } from "@/utils/types";

async function RootPage() {
  const carouselItems = await getCarouselItems();
  const bannerImages = await getBannerImages();
  const aboutMe = await getAboutMeDetails();
  const experience = await getExperienceDetails();
  const resume = await getResume();
  const projects = await getTopProjects({ limit: 4 });
  const skills = await getSkills();
  const certificates = await getCertificates();

  return (
    <main id="home">
      <CarouselWrapper carouselItems={carouselItems} />
      <SectionContainer
        bannerImages={bannerImages}
        aboutMe={aboutMe}
        experience={experience}
        resume={resume}
        projects={projects}
        skills={skills}
        certificates={certificates}
      />
      <FooterContainer />
    </main>
  );
}
export default RootPage;
