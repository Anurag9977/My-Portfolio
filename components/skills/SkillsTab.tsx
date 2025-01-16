import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsContent from "./SkillsContent";
import CertificationsContent from "./CertificationsContent";
import { CertificationCard, SkillItem } from "@/utils/types";

function SkillsTab({
  skills,
  certificates,
}: {
  skills: SkillItem[];
  certificates: CertificationCard[];
}) {
  return (
    <Tabs defaultValue="skills" className="w-full">
      <TabsList className="grid w-full grid-cols-2 h-11">
        <TabsTrigger value="skills" className="h-full text-base tracking-wide">
          Skills
        </TabsTrigger>
        <TabsTrigger
          value="certifications"
          className="h-full text-base tracking-wide"
        >
          Certifications
        </TabsTrigger>
      </TabsList>
      <SkillsContent skills={skills} />
      <CertificationsContent certificates={certificates} />
    </Tabs>
  );
}

export default SkillsTab;
