import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: () => <Outlet />,
});
