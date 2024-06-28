import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import { AuthProvider } from "@/contexts/AuthContext.tsx";
import Navbar from "@/components/common/Navbar.tsx";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <hr />
        <Outlet />
        <TanStackRouterDevtools initialIsOpen={false} />
      </ThemeProvider>
    </AuthProvider>
  ),
});
