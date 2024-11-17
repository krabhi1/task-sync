import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  confirmPassword: z.string().min(5),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});


export default function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword:""
    },
  });
  const isLoading = false;

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Card className="mx-auto min-w-80 max-w-xs p-1 ">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="username"
                        {...field}
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
                        disabled={isLoading}
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        type="password"
                        placeholder="confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isLoading} type="submit">
                {isLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign Up
              </Button>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/signin" className="underline">
                  Sign in
                </Link>
              </div>
            </form>
          </Form>
          <Separator className="my-2" />
          <Button>Signup with Google</Button>
        </CardContent>
      </Card>
    </div>
  );
}
