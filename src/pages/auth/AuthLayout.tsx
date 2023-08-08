import { Outlet, useRouter, useSearch } from "@tanstack/router";
import { authRoute, authlayout } from "./config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";


interface AuthLayoutProps {}

export function AuthLayout({}: AuthLayoutProps) {
  const route = authRoute
  const ctx = route.useContext()  
  const { redirect } = useSearch({ from: authlayout.id });
  const [user,loading,error] = useAuthState(ctx.auth,{
    
    async onUserChanged(user) {
      if (user) {
        route.router?.navigate({
          to: redirect,
          // @ts-expect-error
          search: (prev) => ({ redirect: prev?.redirect }),
        });
      }
    },
  });
  // useEffect(() => {
  //   if (user) {
  //     route.router?.navigate({
  //       to: redirect,
  //       // @ts-expect-error
  //       search: (prev) => ({ redirect: prev?.redirect }),
  //     });
  //   }
  // })

return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
