import { useForm } from "react-hook-form";
import "../register/styles.sass";
import { UserSchema } from "../../validation/user-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  // const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("password");

  const useFormMethods = useForm<UserSchema.CreateData>({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(UserSchema.registerData),
  });

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useFormMethods;

  const onSubmit = (data: UserSchema.CreateData) => {
    console.log(data);
  };

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
  };

  const passwordValue = watch("password", "");
  const isLongEnough = passwordValue.length >= 6;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container">
        <div className="register-column">
          <label aria-invalid={!!errors.name}>
            Name
            <input type="text" {...register("name")} />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </label>
          <label>
            Birthday
            <input type="date" {...register("birthday")} />
            {errors.birthday && (
              <span className="error-message">{errors.birthday.message}</span>
            )}
          </label>
          <label>
            E-Mail
            <input type="email" {...register("email")} />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </label>
          <label>
            Password
            <div className="password-container">
              <input type={type} {...register("password")} />
              <i onClick={handleToggle}>
                {type === "password" ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </i>
            </div>
            <div className="validation-status">
              {isLongEnough ? (
                <GiCheckMark
                  color={"green"}
                  size={"15px"}
                  style={{ marginRight: "6px" }}
                />
              ) : (
                <RxCross1
                  color="red"
                  size={"15px"}
                  style={{ marginRight: "6px" }}
                />
              )}{" "}
              Password must be longer than 6 characters
            </div>
            <div className="validation-status">
              {hasSpecialChar ? (
                <GiCheckMark
                  color={"green"}
                  size={"15px"}
                  style={{ marginRight: "6px" }}
                />
              ) : (
                <RxCross1
                  color="red"
                  size={"15px"}
                  style={{ marginRight: "6px" }}
                />
              )}{" "}
              Password must contain special characters
            </div>
          </label>
          <label>
            Confirm Password
            <input type="password" {...register("confirm_password")} />
            {errors.confirm_password && (
              <span className="error-message">
                {errors.confirm_password.message}
              </span>
            )}
          </label>
        </div>

        <div className="divider" />

        <div className="register-right">
          <img src={"/images/register.png"} alt="Register" />
          <a className="link">
            <span>I already have an account</span>
          </a>
          <div className="terms">
            <input type="checkbox" id="terms" {...register("terms")} />
            <label htmlFor="terms">I agree to the</label>
            <a href="#">
              <span>Terms of Service</span>
            </a>
          </div>
          {errors.terms && (
            <span className="error-message">{errors.terms.message}</span>
          )}
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
  );
};

export default Register;
