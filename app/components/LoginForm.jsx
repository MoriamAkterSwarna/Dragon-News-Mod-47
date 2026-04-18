
"use client";
import { Input } from "@heroui/react";
import { Form } from "@heroui/react";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "../lib/auth-client";

const LoginForm = () => {

  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsPending(true);
  setError("");
  

  const email = e.target.email.value;
  const password = e.target.password.value;
  
  console.log(email, password);

  const {data, error} = await signIn.email({
    email,
    password,
  });
  
  setIsPending(false); 

  if (error) {
    setError(error.message);
  }

  if (data) {
    router.push("/");
  }

};

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f1f2] px-4">
      <Card className="bg-white border border-white rounded-[5px] w-full max-w-188 px-12 py-32 shadow-lg">
        <Card.Header className="justify-center pb-1 pt-2">
          <h2 className="text-center text-2xl font-semibold text-[#403f3f]">
            Login your account
          </h2>
        </Card.Header>

        <Card.Content>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your email address"
            />

            <Input
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
            />

            <Button
              type="submit"
              className="w-full h-16.25 bg-[#403f3f] text-white font-['Poppins'] font-semibold text-[20px]"
              radius="sm"
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </Form>

          <p className="text-center text-[#403f3f] font-['Poppins'] text-[16px] mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default LoginForm;
