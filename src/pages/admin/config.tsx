import { Route, redirect } from "@tanstack/router";
import { rootLayout } from "@/main";
import { AdminLayout } from "./AdminLayout";
import { AdminPage } from "./AdminPage";
import { isUserLoggedIn } from "@/state/firebase/auth/methods";

const adminLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "admin",
  // auth guard implementation
  component: AdminLayout,
  beforeLoad() {
 if (!(isUserLoggedIn())) {
      throw redirect({
        to: "/auth",
        search: {
          redirect: "/admin",
        },
      });
    }
  },
});
const indexRoute = new Route({
  getParentRoute: () => adminLayout,
  path: "/",
  component: AdminPage,
  

});

// profile route

export const adminRoute = adminLayout.addChildren([indexRoute]);
