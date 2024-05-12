import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  InputPassword,
  Loader,
} from "@/components";
import bgVideo from "@/assets/bg-video.mp4";
import "./style.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { LoginSchemaType, loginSchema } from "@/lib/schema/loginFormSchema";
import { Input } from "@/components/ui/input";
import { createAlertError } from "@/lib";
import { useApi } from "@/hooks";
import { apiStatus } from "@/constants";
import useAuthStore from "@/stores/authStore";

export default function LoginPage() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const { loginHandler } = useAuthStore();
  const { isPending, setStatus } = useApi(apiStatus.idle);

  const submit = async (values: LoginSchemaType) => {
    try {
      setStatus(apiStatus.pending);
      await loginHandler(values);
      setStatus(apiStatus.success);
    } catch (err) {
      setStatus(apiStatus.error);
      createAlertError(err as Error, "Failed to login");
    }
  };

  return (
    <main className="relative flex h-screen w-screen overflow-hidden text-gray-text">
      {isPending && <Loader />}
      <div className="z-20 m-auto rounded-[20px] bg-white/50 px-[120px] py-20 backdrop-blur-lg">
        <h1 className=" my-10 text-center text-5xl font-bold text-main-orange-500">
          Login
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submit)}
            className="flex w-96 flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username/Email</FormLabel>
                  <FormControl>
                    <Input placeholder="orange_cat@cat.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <InputPassword {...field} placeholder="Your password" />
                  </FormControl>
                </FormItem>
              )}
            />
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
                <GoogleIcon />
              </div>
              <div className="cursor-pointer rounded-[25px] bg-white px-8 py-2 transition-all hover:bg-slate-300">
                <GithubIcon />
              </div>
              <div className="cursor-pointer rounded-[25px] bg-white px-8 py-2 transition-all hover:bg-slate-300">
                <FacebookIcon />
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
          </form>
        </Form>
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
