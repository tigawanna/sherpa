import { Features } from "./components/Features";

interface WelcomePageProps {}

export function WelcomePage({}: WelcomePageProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="min-h-[200px] flex flex-col justify-evenly items-center gap-5">
          <div className=" ">
            <h1
              className="background-animate text-6xl 
            font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-amber-400 via-red-400 to-amber-800">
              Welcome To Sherpa
            </h1>
          </div>

          <p className="text-2xl text-accent ">Your smart job application assistant</p>
          <Features />
          <button className="btn btn-secondary-focus">Get Started</button>
        </div>
      </div>
    </div>
  );
}
