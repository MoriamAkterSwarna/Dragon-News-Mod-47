

"use client";
import { Button } from "@heroui/react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/app/lib/auth-client";

export default function RightSidebar() {

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="space-y-4">
      <Button fullWidth variant="outline" onPress={handleGoogleSignIn}>
        <FcGoogle />
        Login with Google
      </Button>
      <Button fullWidth variant="outline" onPress={handleGitHubSignIn}>
        <FaGithub />
        Login with GitHub
      </Button>
      {/* Rest Design Part Will be Homework */}
    </div>
  );
}
