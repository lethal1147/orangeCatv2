import { howItWork } from "../data/mockData";
import HowItWorkCard from "./howItWorkCard";

export default function HowItWorkSection() {
  return (
    <section id="how" className="w-full bg-main-orange-500 py-20">
      <h2 className="mb-20 text-center text-5xl font-bold text-white">
        How it Work!
      </h2>
      <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-10">
        {howItWork.map((content) => (
          <HowItWorkCard key={content.name} content={content} />
        ))}
      </div>
    </section>
  );
}
