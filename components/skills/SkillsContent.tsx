import { Card, CardContent } from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { SkillItem } from "@/utils/types";

function SkillsContent({ skills }: { skills: SkillItem[] }) {
  return (
    <TabsContent value="skills">
      <Card>
        <CardContent className="my-4 py-0">
          {skills.map((item, index) => {
            const { heading, skills } = item;
            return (
              <div key={index} className="mt-6 last:mb-6">
                <h1 className="text-foreground/50 font-semibold capitalize tracking-wide text-lg">
                  {heading}
                </h1>
                {skills.map((skill, i) => {
                  return (
                    <h2
                      key={i}
                      className="ml-4 font-medium capitalize tracking-wide mt-1 mb-2"
                    >
                      {skill.heading} :{" "}
                      <span className="font-normal">
                        {skill.skillsList.join(" | ")}
                      </span>
                    </h2>
                  );
                })}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
export default SkillsContent;
