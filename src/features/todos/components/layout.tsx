import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="container mx-auto px-2">
      <Outlet />
    </div>
  );
}
