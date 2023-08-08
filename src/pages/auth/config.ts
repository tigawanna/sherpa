import { Route, redirect } from "@tanstack/router";
import { rootLayout } from "@/main";
import { AuthLayout } from "./AuthLayout";
import { LoginUser } from "./LoginPage";
import { SignupPage } from "./SignUpPage";



interface AuthSearch {
  redirect: string;
}
export const authlayout = new Route({
  getParentRoute: () => rootLayout,
  path: "auth",
  component: AuthLayout,
  validateSearch: (search: Record<string, unknown>): AuthSearch => {
    // validate and parse the search params into a typed state
    return {
      redirect: (search.redirect as string) ?? "/",
    };
  },
  async beforeLoad(route) {
    const auth = route.context.auth;
    await auth.authStateReady();
    if (auth.currentUser) {
      throw redirect({
        to: "..",
      });
    }
  }
});
const authIndexRoute = new Route({
  getParentRoute: () => authlayout,
  path: "/",
  component: LoginUser,
});
const signupRoute = new Route({
  getParentRoute: () => authlayout,
  path: "/signup",
  component: SignupPage,
});
// profile route

export const authRoute = authlayout.addChildren([authIndexRoute, signupRoute]);
