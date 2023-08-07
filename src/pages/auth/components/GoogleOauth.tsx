import { auth } from "@/state/firebase/client";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { LucideGithub, Loader } from "lucide-react";


import { FcGoogle } from "react-icons/fc";
import { LuLoader } from "react-icons/lu";
interface GoogleOauthProps {

}

export function GoogleOauth({}:GoogleOauthProps){
const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);
function loginwithgoogle() {
  return signInWithGoogle()
    .then(() => toast("Logged in successfully", { type: "success" }))
    .catch((error) => toast(error.message, { type: "error" }));
}
return (
  <div className="w-full flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center justify-center w-full border-opacity-50">
   

      <div
        style={{ border: error ? "1px solid #f00" : "" }}
        className="elevation-5 p-2 w-fit rounded-xl hover:shadow hover:shadow-accent">
        {loading ? (
          <LuLoader className="w-9 h-9 animate-spin" />
        ) : (
          <FcGoogle className="w-9 h-9 " onClick={() => loginwithgoogle()} />
        )}
      </div>
    </div>
  </div>
);
}
