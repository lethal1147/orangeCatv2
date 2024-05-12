import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { FaUser } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import sideImage from "./assets/side.jpg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// eslint-disable-next-line object-curly-newline
import { cn, createAlert, createAlertError, registrationSchema } from "@/lib";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { withAsync } from "@/utils";
import { register } from "@/api";
import { useApi } from "@/hooks";
import { apiStatus } from "@/constants";
import { Loader } from "@/components";

export default function RegisterPage() {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      gender: "m",
    },
  });
  const { setStatus, isPending } = useApi(apiStatus.idle);
  const [profilePreview, setProfilePreview] = useState("");
  const navigate = useNavigate();
  const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setProfilePreview(event.target!.result as string);
      };
      reader.readAsDataURL(file);
    }
    form.setValue("profileImage", file as File);
  };

  async function onSubmit(data: z.infer<typeof registrationSchema>) {
    try {
      setStatus(apiStatus.pending);
      const formData = new FormData();
      formData.append("userJson", JSON.stringify(data));
      if (data.profileImage) {
        formData.append("image", data.profileImage);
      }
      const { error } = await withAsync(() => register(formData));
      if (error) throw new Error(error);
      setStatus(apiStatus.success);
      const result = await createAlert({
        title: "Create account successfully!",
        icon: "success",
        timer: 3000,
      });
      if (result.dismiss || result.isConfirmed) {
        navigate("/login");
      }
    } catch (err) {
      createAlertError(err as Error, "Failed to login!");
      setStatus(apiStatus.error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex h-screen w-screen overflow-hidden"
      >
        {isPending && <Loader />}
        <aside>
          <img
            className="absolute min-h-full min-w-full backdrop-blur-lg"
            alt="Running girl"
            src={sideImage}
          />
        </aside>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-main-orange-500/30 to-black/90" />

        <ScrollArea className="z-20 m-auto h-4/5 w-2/5 rounded-[20px] bg-white/50 py-10 text-gray-text backdrop-blur-lg">
          <div className="flex w-full flex-col gap-3 px-[120px]">
            <h1 className="mb-10 text-center text-5xl font-bold text-main-orange-500">
              Register
            </h1>
            <div className="flex w-full justify-center">
              <FormField
                control={form.control}
                name="profileImage"
                render={({ fieldState: { error } }) => (
                  <FormItem>
                    <FormControl>
                      <label
                        htmlFor="cover"
                        className={cn(
                          "flex size-48 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-[120px] hover:border-2 hover:border-main-orange-500 focus:bg-gray-stroke",
                          error ? "border-2 border-main-red" : "",
                        )}
                      >
                        {profilePreview ? (
                          <img
                            className="size-full"
                            src={profilePreview}
                            alt="profile"
                          />
                        ) : (
                          <FaUser />
                        )}
                        <input
                          accept="image/*"
                          onChange={onUploadImage}
                          type="file"
                          className="hidden"
                          id="cover"
                        />
                      </label>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="Username"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="Confirm password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="Last name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className={cn("", error ? "border-main-red" : "")}
                      placeholder="orangecat@cat.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field, fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger
                        className={cn("", error ? "border-main-red" : "")}
                      >
                        <SelectValue placeholder="Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="m">Male</SelectItem>
                        <SelectItem value="f">Female</SelectItem>
                        <SelectItem value="p">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </div>
        </ScrollArea>
      </form>
    </Form>
  );
}
