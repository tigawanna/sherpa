import { Route, lazyRouteComponent, redirect } from "@tanstack/router";
import { rootLayout } from "@/main";
import { isUserLoggedIn } from "@/state/firebase/auth/methods";

const profileLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "profile",
  component: (lazyRouteComponent(() => import("./ProfileLayout"), "ProfileLayout")),
  beforeLoad() {
    if (!(isUserLoggedIn())) {
      throw redirect({
        to: "/auth",
        search: {
          redirect: "/profile",
        },
      });
    }
  },
});
const profileIndexRoute = new Route({
  getParentRoute: () => profileLayout,
  path: "/",
  component: (lazyRouteComponent(() => import("./ProfilePage"), "ProfilePage")),
});

// const userRoute = new Route({
//   getParentRoute: () => profileLayout,
//   path: "$id",
//   component: ProfileUser,
// });

// profile route

export const profileRoute = profileLayout.addChildren([
  profileIndexRoute,
]);
