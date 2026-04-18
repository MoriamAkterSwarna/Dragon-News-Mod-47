import { Input } from "@heroui/react";
import { Form } from "@heroui/react";
import { Card } from "@heroui/react";
import { Button } from "@heroui/react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f1f2] px-4">
      <Card className="bg-white border border-white rounded-[5px] w-full max-w-188 px-12 py-32 shadow-lg">
        <Card.Header className="justify-center pb-1 pt-2">
          <h2 className="text-center text-2xl font-semibold text-[#403f3f]">
            Login your account
          </h2>
        </Card.Header>

        <Card.Content>
          <Form className="flex flex-col gap-8">
            <Input
              type="email"
              label="Email"
              placeholder="Enter your email address"
            />

            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Button
              type="submit"
              className="w-full h-16.25 bg-[#403f3f] text-white font-['Poppins'] font-semibold text-[20px]"
              radius="sm"
            >
              Login
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
