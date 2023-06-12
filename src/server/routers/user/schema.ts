import { z } from "zod";
import { prisma } from "~/server/db";

export const registerInputSchema = {
  name: z.string().min(2),
  email: z.string().email("Enter a valid email"),
  username: z.string().min(4),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?])[A-Za-z\d\-+_!@#$%^&*.,?]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character(?=.*[@$!%*?&])"
    ),
  dob: z.date(),
};

export const loginInputSchema = {
  emailOrUsername: z.union([
    z.string().email("Enter a valid email"),
    z
      .string()
      .min(
        4,
        "Enter Username of atleast 4 characters. It should contain only alphabets and numbers."
      ),
  ]),
  password: z.string().min(8, "Enter valid password"),
};

export const usernameExistsSchema = z.object({
  username: z.string().min(4),
});

export const emailExistsSchema = z.object({
  email: z.string().email(),
});

export const modifyUserSchema = z.object({
  name: z.string().min(2),
  username: z.string().min(4),
  bio: z.string().max(160).optional(),
  dob: z.date(),
  userType: z.enum(["Regular", "Business", "Investor","Collector"]),
});
