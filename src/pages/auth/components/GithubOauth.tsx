import { LucideGithub, Loader } from "lucide-react";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "@/state/firebase/client";
import { toast} from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";

interface GithubOauthProps {

}

export function GithubOauth({}: GithubOauthProps) {

const [signInWithGithub,_, loading, error] = useSignInWithGithub(auth);
function loginwithgithub(){
        return signInWithGithub(["repo"])
          .then(() => toast("Logged in successfully", { type: "success" }))
          .catch((error) => toast(error.message, { type: "error" }));
}
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-full border-opacity-50">


        <div 
        style={{border:error?"1px solid #f00":""}}
        className="elevation-5 p-2 w-fit rounded-xl hover:shadow hover:shadow-accent">
          {loading ? (<LuLoader className="w-9 h-9 animate-spin" />) : (
            <FaGithub className="w-9 h-9 " onClick={() => loginwithgithub()}/>
          )}
        </div>
      </div>
    </div>
  );
}
