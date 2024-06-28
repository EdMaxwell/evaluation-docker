import axios from "axios";
import { API_URL } from "../../../apiConfig.ts";
import { Button } from "@/components/ui/button.tsx";

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
      console.log("Logged out successfully");
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
