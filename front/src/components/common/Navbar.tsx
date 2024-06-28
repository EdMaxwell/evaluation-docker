import { useAuth } from "@/contexts/AuthContext.tsx";
import { Link } from "@tanstack/react-router";
import LogoutButton from "@/components/common/LogoutButton.tsx";
import { ModeToggle } from "@/components/common/mode-toggle.tsx";
import { Button } from "@/components/ui/button.tsx";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="p-2 flex gap-4 justify-end pr-20 content-center">
      <Link to="/" className="[&.active]:font-bold">
        <Button>Home</Button>
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        <Button>About</Button>
      </Link>
      <Link to="/users/list-users" className="[&.active]:font-bold">
        <Button>List All Users</Button>
      </Link>
      {!isAuthenticated ? (
        <Link to="/auth/login" className="[&.active]:font-bold">
          <Button>Login</Button>
        </Link>
      ) : (
        <LogoutButton />
      )}
      <ModeToggle />
    </div>
  );
}

export default Navbar;
