
"use client";
import { Checkbox } from "@heroui/react";
import { Form } from "@heroui/react";
import { Card } from "@heroui/react";
import { Label } from "@heroui/react";
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";

import { useState } from "react";
import { signUp } from "../lib/auth-client";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await signUp.email({
      name,
      email,
      password,
      image: photo, 
    });
    console.log(data, error);
    if (error) {
      setError(error.message);
      setIsPending(false);
      return;
    }
    setIsPending(false);
    router.push("/login");
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f1f2] px-4">
      <Card className="bg-white border border-white rounded-[5px] w-full max-w-188 p-12 shadow-lg">
        <Card.Header className="mb-12">
          <h1 className="font-['Poppins'] font-semibold text-[35px] text-[#403f3f] text-center mb-8">
            Register your account
          </h1>
          <div className="border-t border-[#E7E7E7]"></div>
        </Card.Header>
        <Card.Content>
          <Form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <Input label="Your Name" placeholder="Enter your name" name="name" />

            <Input label="Photo URL" placeholder="Enter your photo URL" name="photoURL" />

            <Input
              type="email"
              label="Email"
              placeholder="Enter your email address"
              name="email"
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              name="password"
            />

            <Checkbox id="basic-terms">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label htmlFor="basic-terms">Accept terms and conditions</Label>
              </Checkbox.Content>
            </Checkbox>

            <Button
              type="submit"
              className="w-full h-16.25 bg-[#403f3f] text-white font-['Poppins'] font-semibold text-[20px]"
              radius="sm"
              isDisabled={isPending}
            >
              {isPending ? "Registering..." : "Register"}
            </Button>
          </Form>

          <p className="text-center text-[#403f3f] font-['Poppins'] text-[16px] mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RegisterForm;
