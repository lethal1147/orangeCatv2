import { Link } from "react-router-dom";
import orangeCat from "@/assets/mascot.png";

export default function HeroSection() {
  return (
    <section id="hero" className="mx-auto my-36 flex w-2/3 gap-20">
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
        <Link
          to="/login"
          className="bg-main-orange-500 py-3 text-center text-xl font-bold text-white shadow-lg transition-all hover:bg-main-orange-700"
        >
          Get Started!
        </Link>
      </div>
      <div className="w-[450px]">
        <img src={orangeCat} alt="Orange's cat" />
      </div>
    </section>
  );
}
