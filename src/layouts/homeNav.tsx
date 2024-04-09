import logo from "@/assets/navbar-logo.png";
import { Button } from "@/components/ui/button";
import "../index.css";

export default function HomeNav() {
  return (
    <nav className="flex items-center justify-between bg-main-orange p-5 text-white">
      <div className="flex items-center gap-3 text-3xl font-bold">
        <img src={logo} alt="Orange's cat logo" />
        <h2>Orange Cat</h2>
      </div>

      <ul className="flex gap-5 text-xl font-bold">
        <li className="underline-effect">
          <a href="#home">Home</a>
        </li>
        <li className="underline-effect">
          <a href="#feature">Features</a>
        </li>
        <li className="underline-effect">
          <a href="#bmi">BMI</a>
        </li>
        <li className="underline-effect">
          <a href="#how">How it Works</a>
        </li>
      </ul>

      <div className="flex gap-3">
        <Button className="bg-main-green font-bold hover:bg-main-green-20%">
          Login
        </Button>
        <Button className="border-2 border-white bg-inherit font-bold hover:bg-main-orange-20%">
          Sign-up
        </Button>
      </div>
    </nav>
  );
}
