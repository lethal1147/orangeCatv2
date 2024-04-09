import { features } from "../data/mockData";
import FeatureCard from "./featureCard";

export default function FeatureSection() {
  return (
    <section id="feature" className="w-full bg-main-orange py-20">
      <h2 className="mb-20 text-center text-5xl font-bold text-white">
        Features !
      </h2>
      <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-10">
        {features.map((feat) => (
          <FeatureCard key={feat.name} feature={feat} />
        ))}
      </div>
    </section>
  );
}
