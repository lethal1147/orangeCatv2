import { Card, CardContent } from "@/components/ui/card";
import { FeatureCardInfo } from "../types";

type FeatureCardPropsType = {
  feature: FeatureCardInfo;
};

export default function FeatureCard({ feature }: FeatureCardPropsType) {
  return (
    <Card className="rounded-[25px] shadow-lg transition-all duration-150 hover:-translate-y-5">
      <CardContent className="flex flex-col gap-3 text-center text-gray-text">
        <div className="my-10 size-52 self-center overflow-hidden rounded-full">
          <img src={feature.img} alt={feature.name} />
        </div>
        <h4 className="text-2xl font-bold">{feature.name}</h4>
        <p>{feature.desc}</p>
      </CardContent>
    </Card>
  );
}
