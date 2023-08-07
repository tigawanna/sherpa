import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/state/firebase/client";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "@tanstack/router";
import { SocialLogin } from "./SocialLogin";


interface SigninFormProps {

}


export function SigninForm({}: SigninFormProps) {
const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
type TFormValues = typeof defaultValues;
const [showPassword, setShowPassword] = useState(false);
const {register,handleSubmit,formState: { errors },} = useForm({ defaultValues });
  
const [signInWithEmailAndPassword,_,loading, __,]=useSignInWithEmailAndPassword(auth)

    function submitForm(data: TFormValues) {
     signInWithEmailAndPassword(data.email, data.password)
       .then(() => {
         toast("Logged in successfully", {
           type: "success",
         });
       })
       .catch((error) => {
         toast(error.message, {
           type: "error",
         });
       });

    }

  return (
    <div className="w-full hero min-h-screen ">
      <div className="hero-content w-full md:w-fit flex-col lg:flex-row-reverse items-center justify-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="h-full w-full md:min-w-[300px] max-w-xs flex flex-col gap-5 items-center justify-center ">
          
          {/* email field */}
          <div className="w-full flex flex-col items- gap-1">
            <label htmlFor="email" className="text-sm">
              email
            </label>
            <input
              id="email"
              {...register("email", {})}
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              name="email"
              placeholder="email"
              className="input input-sm border border-accent"
            />
          </div>

          <div className="w-full flex flex-col gap-3">
            {/* password field */}
            <div className="flex flex-col gap-1">
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

          {/* submit button */}
          <button
            type="submit"
            className="w-full px-3 py-2 rounded-lg elevation-3
            flex items-center justify-center
              bg-secondary text-sm font-bold hover:bg-secondary-focus">
            {loading ? <Loader className="w-6 h-6 animate-spin" /> : "Sign In"}
          </button>

          <div className="divider text-sm text-info hover:text-info-content h-fit p-0 m-0">
            <Link to="/auth/signup" search={{ redirect: "/" }}>
              {" "}
              New here? , Create an account{" "}
            </Link>
          </div>
          {/* socila login */}
          <SocialLogin />
        </form>
      </div>
    </div>
  );
}
