import { Route, redirect } from "@tanstack/router";
import { rootLayout } from "@/main";
import { AdminLayout } from "./AdminLayout";
import { AdminPage } from "./AdminPage";


const adminLayout = new Route({
  getParentRoute: () => rootLayout,
  path: "admin",
  // auth guard implementation
  component: AdminLayout,
 async beforeLoad(route) {
    const auth = route.context.auth
    await auth.authStateReady()
        if (!auth.currentUser) {
          throw redirect({
            to: "/auth",
            search: {
              redirect: adminRoute.router?.state.location.href??"/admin",
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
