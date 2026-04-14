import * as yup from "yup";

const emailValidation = yup
  .string()
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "Invalid email format.",
  )
  .required("This field is required.");

const passwordValidation = yup
  .string()
  .required("This field is required.")
  .min(8, "Password must be more than 8 characters.");

export const addTenantSchema = yup.object({
  clientName: yup
    .string()
    .required("client name is required")
    .max(20, "Must have less than 20 characters"),
  status: yup.string().default("active"),
  schema: yup.string().default(""),
  slug: yup.string().default(""),
  domain: yup.string().default(""),
  isPrimary: yup.boolean().default(true),
  username: yup.string().default(""),
  password: passwordValidation,
});
