// eslint-disable-next-line object-curly-newline
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function LandingFooter() {
  return (
    <footer className="flex justify-between px-20 py-10">
      <div className="flex flex-col gap-4 font-bold">
        <h5 className="text-3xl font-bold text-main-orange-500 underline">
          CONTACT
        </h5>
        <a href="tel:+02-222-2222">02-222-2222</a>
        <a href="mailto:contact@orangecat.com">contact@orangecat.com</a>
      </div>
      <div className="flex flex-col gap-4 font-bold">
        <h5 className="text-3xl font-bold text-main-orange-500 underline">
          ©️ Orange Cat
        </h5>
        <div className="flex justify-between text-3xl">
          <a
            className="transition-all hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com"
          >
            <FaFacebook />
          </a>
          <a
            className="transition-all hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://discord.com"
          >
            <FaDiscord />
          </a>
          <a
            className="transition-all hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com"
          >
            <FaInstagram />
          </a>
          <a
            className="transition-all hover:scale-125"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
