import { z, ZodType } from "zod";
import { LoginForm } from "../interfaces/forms";

export const LoginSchema: ZodType<LoginForm> = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
