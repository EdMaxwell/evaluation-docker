import { createFileRoute } from '@tanstack/react-router'
import CreateAccount from "@/pages/users/CreateAccount.tsx";

export const Route = createFileRoute('/users/create-account')({
    component: CreateAccount,
})
