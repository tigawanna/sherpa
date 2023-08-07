import { auth } from "@/state/firebase/client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

import { useForm } from "react-hook-form";
import { Link } from "@tanstack/router";
import { SocialLogin } from "./SocialLogin";

interface SignupFormProps {}



export function SignupForm({}: SignupFormProps) {
const defaultValues= {
    email: "",
    password: "",
    confirmPassword: "",
}
type TFormValues = typeof defaultValues
const {register,handleSubmit,watch,formState: { errors },} = useForm({defaultValues});
const [showPassword, setShowPassword]=useState(false)
const [createUserWithEmailAndPassword,_,loading,__] = useCreateUserWithEmailAndPassword(auth);

function  submitForm(data: TFormValues){
      createUserWithEmailAndPassword(data.email,data.password).then(()=>{
        toast("Account created successfully", {
          type: "success",
        });
      }).catch((error)=>{
        toast(error.message, {
          type: "error",
        });
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="h-full w-full md:min-w-[300px] max-w-xs flex flex-col gap-3 items-center justify-center ">
            {/* email */}
          <div className="w-full flex flex-col items- gap-1">
            <label htmlFor="email" className="text-sm">
              email
            </label>
            <input
              {...register("email", {})}
              id="email"
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              name="email"
              placeholder="email"
              className="input input-sm border border-accent"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            {/* password */}
            <div className="w-full flex flex-col items- gap-1">
              <label htmlFor="password" className="text-sm">
                password
              </label>
              <input
                id="password"
                {...register("password", {})}
                aria-invalid={errors.password ? "true" : "false"}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-sm border border-accent"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              {/* confirm password */}
              <div className="w-full flex flex-col items- gap-1">
                <label htmlFor="confirm-password" className="text-sm">
                  confirm password
                </label>
                <input
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    validate: (value) => value === watch("password"),
                    required: true,
                  })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="confirm password"
                  className="input input-sm border border-accent"
                />
                {errors.confirmPassword && <p className="text-error text-xs">{"Passwords do not match"}</p>}
              </div>
            </div>

            {/* show password */}
            <div className="flex  gap-2 items-center  text-xs">
              <input
                id="show-password"
                type="checkbox"
                checked={showPassword}
                onChange={() => {
                  setShowPassword(!showPassword);
                }}
                className="checkbox checkbox-accent checkbox-sm"
              />
              <label htmlFor="show-password">show password</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-lg elevation-3
            flex items-center justify-center
              bg-secondary text-sm font-bold hover:bg-secondary-focus">
            {loading ? <Loader className="w-6 h-6 animate-spin" /> : "Sign Up"}
          </button>

          <div className="divider text-sm text-info hover:text-info-content h-fit p-0 m-0 ">
            <Link to="/auth" search={{ redirect: "/" }}>
              Already have an account?{" "}
            </Link>
          </div>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
}
