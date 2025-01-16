import { AboutStats as AboutStatsType } from "@/utils/types";

function AboutStats({ stats }: { stats: AboutStatsType[] }) {
  return (
    <section className="px-8 py-4 bg-muted grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
      {stats.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between items-center gap-y-2"
          >
            <h1 className="text-primary capitalize tracking-wide font-semibold text-xl">
              {item.title}
            </h1>
            <p className="capitalize font-semibold text-3xl">{item.quantity}</p>
            <h1 className="text-primary capitalize tracking-wide font-semibold text-xl">
              {item.unit}
            </h1>
          </div>
        );
      })}
    </section>
  );
}
export default AboutStats;
