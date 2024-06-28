import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema.ts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.tsx";
import axios from "axios";
import { API_URL } from "../../../apiConfig.ts";
import { Link } from "@tanstack/react-router";

type loginProps = {
  email: string;
  password: string;
};

function Login() {
  const form = useForm<loginProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: loginProps) {
    try {
      await axios.post(`${API_URL}/login`, data, { withCredentials: true });
      console.log("Logged in successfully");
    } catch (error) {
      console.log("Error logging in.");
    }
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                    placeholder="Password"
                    {...field}
                    value={field.value || ""}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <Button type="submit" className="w-full sm:w-auto">
              Login
            </Button>
            <Link to="/users/create-account">
              <Button className="w-full sm:w-auto"> Create an account</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default Login;
