import { Outlet, useRouter, useSearch } from "@tanstack/router";
import { authlayout } from "./config";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/state/firebase/client";

interface AuthLayoutProps {}

export function AuthLayout({}: AuthLayoutProps) {
  const router = useRouter();
  const { redirect } = useSearch({ from: authlayout.id });
  const [_, __, ___] = useAuthState(auth,{
    async onUserChanged(user) {
      if (user) {
        router.navigate({
          to: redirect,
          // @ts-expect-error
          search: (prev) => ({ redirect: prev?.redirect }),
        });
      }
    },
  });

return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
