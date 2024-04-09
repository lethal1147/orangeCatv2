import { Input } from "@/components/ui/input";
import orangeCatImage from "@/assets/mascot.png";
import { Button } from "@/components/ui/button";

export default function BmiSection() {
  return (
    <section
      id="bmi"
      className="mx-auto my-20 flex w-full justify-center px-52"
    >
      <div className=" flex w-1/3 flex-col justify-between rounded-[10px] bg-main-orange p-10">
        <h3 className="text-center text-2xl font-bold text-white">
          BMI Calculator
        </h3>
        <Input
          placeholder="Height (cm)"
          className="w-full py-6 placeholder:text-center focus-visible:ring-main-orange"
        />
        <Input
          placeholder="Weight (kg)"
          className="w-full py-6 placeholder:text-center focus-visible:ring-main-orange"
        />
        <p className="text-center text-2xl font-bold text-white">Your BMI!</p>
        <Button className="border-2 bg-inherit py-6 hover:bg-main-orange-20%">
          Calculate
        </Button>
      </div>
      <div className="w-1/2 px-52">
        <img src={orangeCatImage} alt="orange's cat" />
      </div>
    </section>
  );
}
