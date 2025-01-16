import { CertificationCard as CertificationCardType } from "@/utils/types";
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
import { LuGlobe } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";

function CertificationCard({
  provider,
  heading,
  description,
  imageURL,
  link,
}: CertificationCardType) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">
          <h1 className="tracking-wide">{provider}</h1>
          <h1 className="mt-1 text-sm">{heading}</h1>
        </CardTitle>
        <CardDescription className="font-medium tracking-wide">
          <p>
            {description.length > 40
              ? showDescription
                ? description
                : description.substring(0, 40) + "..."
              : description}
            <Button
              variant="link"
              size="default"
              type="button"
              className={
                description.length > 40
                  ? "mx-1 p-0 h-0 inline-flex items-start capitalize leading"
                  : "hidden"
              }
              onClick={() => {
                setShowDescription(!showDescription);
              }}
            >
              {showDescription ? "show less" : "read more"}
            </Button>
          </p>
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
          <Link target="_blank" href={link}>
            <LuGlobe />
            link
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
export default CertificationCard;
