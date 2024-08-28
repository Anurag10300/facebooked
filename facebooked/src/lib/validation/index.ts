import { z } from "zod";


export const signupValidation = z.object({
    name: z.string().min(2, { message : "Too short!" }),
    username: z.string().min(2, { message : "Too short!" }),
    email: z.string().min(2),
    password: z.string().min(2, { message : "Password should be at least 8 characters long" }),
  })