import { TabsContent } from "../ui/tabs";
import CertificationCard from "./CertificationCard";
import { CertificationCard as CertificationCardType } from "@/utils/types";

function CertificationsContent({
  certificates,
}: {
  certificates: CertificationCardType[];
}) {
  return (
    <TabsContent value="certifications">
      <section className="mt-8 grid md:grid-cols-2 gap-x-6 gap-y-8">
        {certificates.map((certificate, index) => {
          return <CertificationCard key={index} {...certificate} />;
        })}
      </section>
    </TabsContent>
  );
}
export default CertificationsContent;
