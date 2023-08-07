import { GithubOauth } from "./GithubOauth";
import { GoogleOauth } from "./GoogleOauth";

interface SocialLoginProps {

}

export function SocialLogin({}:SocialLoginProps){
return (
  <div className="w-full flex flex-col items-center justify-center">
    <div className="divider text-sm text-accent h-fit m-0 mb-2 p-0">or continue with</div>
    <div className="w-full flex items-center justify-center">
    <GoogleOauth />
    <GithubOauth />
    </div>
  </div>
);
}
