import { Button } from "@heroui/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function RightSidebar() {
  return (
    <div className="space-y-4">
      <Button fullWidth variant="outline">
        <FcGoogle />
        Login with Google
      </Button>
      <Button fullWidth variant="outline">
        <FaGithub />
        Login with GitHub
      </Button>
      {/* Rest Design Part Will be Homework */}
    </div>
  );
}
