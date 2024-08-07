import { boolean, date, object, ref, string, type ObjectSchema } from "yup";
import type { User } from "../types/User";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace UserSchema {
  export type CreateData = Pick<
    Required<User>,
    "name" | "birthday" | "password" | "confirm_password" | "email" | "terms"
  >;

  export const registerData: ObjectSchema<CreateData> = object({
    name: string().required("Name is required"),
    email: string().email("Invalid E-mail").required("E-Mail is required"),
    birthday: date()
      .typeError("Invalid Birthday")
      .required("Birthday is required"),
    password: string()
      .min(6, "Password must be longer than 6 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain special characters"
      )
      .required("Password is required"),
    confirm_password: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    terms: boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });
}
