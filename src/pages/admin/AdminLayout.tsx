import { Outlet } from "@tanstack/router";

interface AdminLayoutProps {}

export function AdminLayout({}: AdminLayoutProps) {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center">
      <Outlet />
    </div>
  );
}
