import { Link } from "react-router-dom";
import { InputPassword, InputText } from "@/components";
import bgVideo from "@/assets/bg-video.mp4";
import "./style.css";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="relative flex h-screen w-screen overflow-hidden text-gray-text">
      <div className="z-20 m-auto rounded-[20px] bg-white/50 px-[120px] py-20 backdrop-blur-lg">
        <h1 className=" my-10 text-center text-5xl font-bold text-main-orange-500">
          Login
        </h1>
        <div className="flex w-96 flex-col gap-3">
          <InputText placeholder="orange_cat@cat.com" label="Email" />
          <InputPassword placeholder="Your password" label="Password" />
          <Link
            className="text-sm font-semibold text-blue-800"
            to="/forgetPassword"
          >
            Forgot Password?
          </Link>
          <Button className="bg-main-orange-500 hover:bg-main-orange-700">
            Sign In
          </Button>
          <p className="my-4 text-center">or continue with</p>
          <div className="flex gap-5 self-center">
            <div className="cursor-pointer rounded-[25px] bg-white px-8 py-2 transition-all hover:bg-slate-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7662 9.64963H22.7996V9.59983H11.9998V14.3998H18.7815C17.7921 17.1939 15.1335 19.1997 11.9998 19.1997C8.02366 19.1997 4.79992 15.9759 4.79992 11.9998C4.79992 8.02366 8.02366 4.79992 11.9998 4.79992C13.8352 4.79992 15.5049 5.4923 16.7763 6.62329L20.1705 3.22914C18.0273 1.23178 15.1605 0 11.9998 0C5.37291 0 0 5.37291 0 11.9998C0 18.6267 5.37291 23.9996 11.9998 23.9996C18.6267 23.9996 23.9996 18.6267 23.9996 11.9998C23.9996 11.1952 23.9168 10.4098 23.7662 9.64963Z"
                  fill="#FFC107"
                />
                <path
                  d="M1.38281 6.41449L5.32534 9.30584C6.39213 6.66468 8.97568 4.79992 11.999 4.79992C13.8344 4.79992 15.5042 5.4923 16.7755 6.62328L20.1697 3.22914C18.0265 1.23178 15.1598 0 11.999 0C7.38991 0 3.39278 2.60215 1.38281 6.41449Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.0002 24.0001C15.0997 24.0001 17.9161 22.8139 20.0455 20.8849L16.3315 17.7422C15.0863 18.6892 13.5646 19.2014 12.0002 19.2001C8.87905 19.2001 6.2289 17.21 5.23051 14.4326L1.31738 17.4476C3.30335 21.3337 7.33648 24.0001 12.0002 24.0001Z"
                  fill="#4CAF50"
                />
                <path
                  d="M23.7664 9.64965H22.7998V9.59985H12V14.3998H18.7817C18.3084 15.7296 17.4559 16.8916 16.3295 17.7423L16.3313 17.7411L20.0453 20.8839C19.7825 21.1227 23.9998 17.9997 23.9998 11.9998C23.9998 11.1952 23.917 10.4098 23.7664 9.64965Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <div className="cursor-pointer rounded-[25px] bg-white px-8 py-2 transition-all hover:bg-slate-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="cursor-pointer rounded-[25px] bg-white px-8 py-2 transition-all hover:bg-slate-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_86_500)">
                  <path
                    d="M24.0001 12.0735C24.0001 5.40454 18.6271 -0.00146484 12.0001 -0.00146484C5.37007 3.51563e-05 -0.00292969 5.40454 -0.00292969 12.075C-0.00292969 18.1005 4.38607 23.0955 10.1221 24.0015V15.564H7.07707V12.075H10.1251V9.41253C10.1251 6.38704 11.9176 4.71603 14.6581 4.71603C15.9721 4.71603 17.3446 4.95154 17.3446 4.95154V7.92154H15.8311C14.3416 7.92154 13.8766 8.85303 13.8766 9.80853V12.0735H17.2036L16.6726 15.5625H13.8751V24C19.6111 23.094 24.0001 18.099 24.0001 12.0735Z"
                    fill="#059BE5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_500">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="mt-4 text-center">
            Don&apos;t have an account yet?{" "}
            <Link
              to="/register"
              className="cursor-pointer font-semibold underline transition-all hover:text-main-orange-500"
            >
              Register for free!
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-main-orange-500/30 to-black/90" />
      <video
        loop
        muted
        className="absolute min-h-full min-w-full backdrop-blur-lg"
        autoPlay
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </main>
  );
}
