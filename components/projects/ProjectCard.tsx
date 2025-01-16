import { ProjectCard as ProjectCardType } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { LuGithub, LuGlobe } from "react-icons/lu";
import Link from "next/link";

function ProjectCard({
  heading,
  description,
  imageURL,
  projectLink,
  githubLink,
}: ProjectCardType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{heading}</CardTitle>
        <CardDescription className="font-medium tracking-wide">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-60">
          <Image
            src={imageURL}
            alt="project-image"
            fill
            sizes="50vw"
            className="h-full w-full object-cover block shadow-md rounded-lg"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-4 capitalize tracking-wide">
        <Button asChild size="lg" className="w-full">
          <Link target="_blank" href={projectLink}>
            <LuGlobe /> project link
          </Link>
        </Button>
        <Button asChild variant="secondary" size="lg" className="w-full">
          <Link target="_blank" href={githubLink}>
            <LuGithub /> source code/repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default ProjectCard;
