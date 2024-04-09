import { Card, CardContent } from "@/components/ui/card";
import { FeatureCardInfo } from "../types";

type HowItWorkCardPropType = {
  content: FeatureCardInfo;
};

export default function HowItWorkCard({ content }: HowItWorkCardPropType) {
  return (
    <Card className="rounded-[25px] py-5 shadow-lg transition-all duration-150 hover:-translate-y-5">
      <CardContent className="flex flex-col gap-3 text-center text-gray-text">
        <h4 className="text-2xl font-bold">{content.name}</h4>
        <div className="my-5 size-52 self-center overflow-hidden">
          <img src={content.img} alt="step of how it work" />
        </div>
        <p>{content.desc}</p>
      </CardContent>
    </Card>
  );
}
