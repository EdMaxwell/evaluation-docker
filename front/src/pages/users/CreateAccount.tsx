import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { User } from "@/types/User.ts";
import { Button } from "@/components/ui/button.tsx";
import { userCreationSchema } from "@/schemas/users/userCreationSchema.ts";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { API_URL } from "../../../apiConfig.ts";
import axios from "axios";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

function CreateAccount() {
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const form = useForm<User>({
    resolver: zodResolver(userCreationSchema),
    defaultValues: {
      pseudo: "",
      fullName: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  async function onSubmit(data: User) {
    try {
      await axios.post(`${API_URL}/users`, data);
      setIsAccountCreated(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const serverErrors = error.response.data;
        if (serverErrors.message) {
          // Handle specific backend errors and map them to form fields
          if (serverErrors.message.includes("Pseudo")) {
            form.setError("pseudo", { message: serverErrors.message });
          } else if (serverErrors.message.includes("Email")) {
            form.setError("email", { message: serverErrors.message });
          }
        }
      } else {
        alert("Error creating account.");
      }
    }
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      {!isAccountCreated ? (
        <>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="pseudo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pseudo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Pseudo"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Create Account</Button>
            </form>
          </Form>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Account Created</h1>
          <Link to="/users/create-account" className="[&.active]:font-bold">
            <Button>Back</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CreateAccount;
