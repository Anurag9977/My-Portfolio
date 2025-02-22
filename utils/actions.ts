"use server";

import { Asset } from "contentful";
import { client } from "./contentful";
import {
  About,
  AboutStats,
  BannerItem,
  CarouselItem,
  CertificationCard,
  ProjectCard,
  SkillItem,
  User,
  VisibleSection,
  WorkExperience,
} from "./types";

//GET AUTHOR DETAILS
export async function getAuthor(): Promise<User> {
  const result = await client.getEntries({
    content_type: "author",
  });
  const { firstName, lastName, email, avatar } = result.items[0].fields;
  const avatarURL = (avatar as Asset)?.fields?.file?.url;
  const user: User = {
    firstName: firstName as string,
    lastName: lastName as string,
    email: email as string,
    avatar: avatarURL as string,
  };
  return user;
}

//GET THE TOP PROJECTS
export async function getTopProjects({
  limit,
}: {
  limit?: number;
}): Promise<ProjectCard[]> {
  const result = await client.getEntries({
    content_type: "project",
    limit,
  });
  return result.items.map((item) => {
    const { heading, description, projectLink, githubLink } = item.fields;
    const imageURL = (item.fields.image as Asset)?.fields?.file?.url;
    return {
      heading: heading as string,
      description: description as string,
      imageURL: ("https:" + imageURL) as string,
      projectLink: projectLink as string,
      githubLink: githubLink as string,
    };
  });
}

//GET CAROUSEL ITEMS
export async function getCarouselItems(): Promise<CarouselItem[]> {
  const result = await client.getEntries({
    content_type: "carousel",
  });
  return result.items.map((item) => {
    const { name, heading, spanText, fancyText, description } = item.fields;
    const imageURL = (item.fields.image as Asset)?.fields?.file?.url;

    return {
      src: ("https:" + imageURL) as string,
      name: name as string,
      heading: heading as string,
      spanText: spanText as string,
      fancyText: fancyText as string,
      description: description as string,
      link: "/#projects",
    };
  });
}

//GET BANNER IMAGES
export async function getBannerImages(): Promise<BannerItem[]> {
  const result = await client.getEntries({
    content_type: "banners",
  });
  return result.items.map((item) => {
    const { heading } = item.fields;
    const imageURL = (item.fields.image as Asset)?.fields?.file?.url;

    return {
      src: ("https:" + imageURL) as string,
      heading: heading as VisibleSection,
    };
  });
}

//GET ABOUT DETAILS
export async function getAboutMeDetails(): Promise<About> {
  const result = await client.getEntries({
    content_type: "about",
  });
  return result.items.map((item) => {
    const { title, description, stats } = item.fields;
    let statsArray: AboutStats[] = [];
    if (stats) {
      statsArray = (stats as any[]).map((item) => {
        return {
          title: item.fields.title as string,
          unit: item.fields.unit as string,
          quantity: item.fields.quantity as string,
        };
      });
    }
    return {
      title: title as string,
      description: description as string[],
      stats: statsArray,
    };
  })[0];
}

//GET EXPERIENCE DETAILS
export async function getExperienceDetails():Promise<WorkExperience[]> {
  const response = await client.getEntries({
    content_type: "workExperience",
  });

  let result : WorkExperience[] = []

  const fields = response.items[0].fields
  for(const key of Object.keys(fields)){
    if(key !== 'title'){
      // Initialize field item of type WorkExperience
      let fieldItem:WorkExperience = {
        heading : '',
        items : []
      }

      // Type assertion for items list which is an array
      let itemsList = fields[key] as Array<any>
      
      // Items List
      itemsList = itemsList.map((item) => {
        return item.fields
      })
      //  Field heading
      const heading = itemsList[0]?.heading

      // Update field items
      fieldItem.heading = heading
      fieldItem.items = itemsList
      result.push(fieldItem)
    }
  }
  return result
}

//GET RESUME LINK
export async function getResume(): Promise<string> {
  const result = await client.getEntries({
    content_type: "resume",
  });
  return result.items[0].fields.link as string;
}

//GET SKILLS
export async function getSkills(): Promise<SkillItem[]> {
  const result = await client.getEntries({
    content_type: "skillItem",
    order: ['-sys.updatedAt']
  });
  return result.items.map((item) => {
    const { heading, skills } = item.fields;
    return {
      heading: heading as string,
      skills: (skills as any[]).map((item) => {
        const { heading, skillsList } = item.fields;
        return {
          heading: heading as string,
          skillsList: skillsList as string[],
        };
      }),
    };
  });
}

//GET CERTIFICATIONS
export async function getCertificates(): Promise<CertificationCard[]> {
  const result = await client.getEntries({
    content_type: "certificate",
  });
  return result.items.map((item) => {
    const { provider, heading, description, link } = item.fields;
    const imageURL = (item.fields.image as Asset)?.fields?.file?.url;

    return {
      provider: provider as string,
      heading: heading as string,
      description: description as string,
      imageURL: ("https:" + imageURL) as string,
      link: link as string,
    };
  });
}
