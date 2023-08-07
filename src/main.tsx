import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Router, RouterContext, RouterProvider } from "@tanstack/router";

import App from "./App";
import { routes } from "./pages/routes/routes";

const routerContext = new RouterContext<{}>();

// Create a root route
export const rootLayout = routerContext.createRootRoute({
  component: App,
  // errorComponent: ErrorComponent,
});

const routeTree = rootLayout.addChildren(routes);

export const router = new Router({
  routeTree,
  context: {},
});

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
