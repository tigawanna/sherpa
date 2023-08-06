import { SignupForm } from "./components/SignupForm";

interface SignupPageProps {}

export function SignupPage({}: SignupPageProps) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col border items-center justify-center ">
        <SignupForm/>
    </div>
  );
}
