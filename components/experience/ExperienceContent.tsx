import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExperienceCard } from "@/utils/types";

function ExperienceContent({ item }: { item: ExperienceCard }) {
  const { heading, company, period, position, details, skills } = item;
  return (
    <section>
      <h1 className="text-xl font-semibold tracking-wide capitalize">
        {heading}
      </h1>
      <Separator className="mt-2" />
      <Card className="mt-6 shadow-sm">
        <CardHeader>
          <CardTitle className="capitalize flex justify-between">
            <span>{company}</span>
            <span className="italic">{period}</span>
          </CardTitle>
          <CardDescription className="font-medium tracking-wide capitalize">
            {position}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {details.map((detail, i) => {
            return (
              <div key={i} className="flex gap-x-4 my-1">
                <span className="text-primary font-bold">&#183;</span>
                <p className="text-justify">{detail}</p>
              </div>
            );
          })}
        </CardContent>
        <CardFooter>
          <p className="font-semibold">
            Skills used :{" "}
            <span className="italic text-foreground/60 font-medium">
              {skills.join(" | ")}
            </span>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
}
export default ExperienceContent;
