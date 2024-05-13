import { z } from "zod";
import { GENDER_ENUMS } from "@/constants";

export const registrationSchema = z
  .object({
    profileImage: z.instanceof(File).optional(),
    username: z
      .string()
      .min(4, { message: "Username must be at least 4 characters long" }),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    gender: z.enum(GENDER_ENUMS),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[!@#$%^&*()_\-+=/><?]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[!@#$%^&*()_\-+=/><?]/, {
        message: "Password must contain at least one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegistrationSchemaType = z.infer<typeof registrationSchema>;
