import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { FaUser } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { cn, registrationSchema } from "@/lib";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      gender: "male",
    },
  });
  const [profilePreview, setProfilePreview] = useState("");

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
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex h-screen w-screen overflow-hidden"
      >
        <aside>
          <img
            className="absolute min-h-full min-w-full backdrop-blur-lg"
            alt="Running girl"
            src={sideImage}
          />
        </aside>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-main-orange-500/30 to-black/90" />

        <ScrollArea className="z-20 m-auto h-4/5 w-2/5 rounded-[20px] bg-white/50 px-[120px] py-10 text-gray-text backdrop-blur-lg">
          <div className="flex w-full flex-col gap-3 px-2">
            <h1 className="mb-10 text-center text-5xl font-bold text-main-orange-500">
              Register
            </h1>
            <div className="flex w-full justify-center">
              <label
                htmlFor="cover"
                className="flex size-48 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white text-[120px] hover:border-2 hover:border-main-orange-500 focus:bg-gray-stroke"
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
                  <FormLabel>Password</FormLabel>
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
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="etc">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
        </ScrollArea>
      </form>
    </Form>
  );
}
