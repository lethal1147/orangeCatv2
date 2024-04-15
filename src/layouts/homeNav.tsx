import { Link } from "react-router-dom";
import logo from "@/assets/navbar-logo.png";
import "../index.css";
import { ModeToggle } from "@/components";

export default function HomeNav() {
  return (
    <nav className="flex items-center justify-between bg-main-orange-500 p-5 text-white">
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

      <div className="flex items-center gap-3">
        <ModeToggle />
        <Link
          to="/login"
          className="rounded border-2 border-white bg-inherit px-8 py-2 font-bold transition-all hover:bg-main-orange-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="rounded border-2 border-white bg-inherit px-8 py-2 font-bold transition-all hover:bg-main-orange-700"
        >
          Sign-up
        </Link>
      </div>
    </nav>
  );
}
