import { Card, CardContent } from "@/components/ui/card";
import { FeatureCardInfo } from "../types";

type FeatureCardPropsType = {
  feature: FeatureCardInfo;
};

export default function FeatureCard({ feature }: FeatureCardPropsType) {
  return (
    <Card>
      <CardContent>
        <div>
          <img src={feature.img} alt={feature.name} />
        </div>
        <h4>{feature.name}</h4>
        <p>{feature.desc}</p>
      </CardContent>
    </Card>
  );
}
