import { useRouter } from "@tanstack/router";
import { SigninForm } from "./components/SigninForm";

interface LoginUserProps {}

export function LoginUser({}: LoginUserProps) {
  const router = useRouter();
  function loginUser() {
    localStorage.setItem("is_authed", "true");
    router.reload();
    // location.reload()
  }

  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
    <SigninForm/>

    </div>
  );
}
