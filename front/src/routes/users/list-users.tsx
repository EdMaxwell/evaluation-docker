import { createFileRoute } from "@tanstack/react-router";
import ListAllUsers from "@/pages/users/ListAllUsers.tsx";

export const Route = createFileRoute("/users/list-users")({
  component: ListAllUsers,
});
