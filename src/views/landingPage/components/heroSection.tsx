import { Button } from "@/components/ui/button";
import orangeCat from "@/assets/mascot.png";

export default function HeroSection() {
  return (
    <section className="mx-auto my-36 flex w-2/3 gap-20">
      <div className=" flex w-2/3 flex-col justify-center gap-14">
        <h1 className="text-6xl font-bold">Make your exercise fun!</h1>
        <article>
          Are you tired of boring workout routines? Do you want to add some
          excitiment to your fitness journey? Look no further than our activity
          tracker app! We believe that exercise should enjoyable and something
          you look forward to everyday. With our app, you can track your
          progress, challenge your friends, and earn achievements all while
          having fun and staying motivated.
        </article>
        <Button className="h-14 bg-main-orange text-xl font-bold hover:bg-main-orange-20%">
          Get Started!
        </Button>
      </div>
      <div className="w-[450px]">
        <img src={orangeCat} alt="Orange's cat" />
      </div>
    </section>
  );
}
