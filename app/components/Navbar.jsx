// 46-3: Navbar with active link styling
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "../lib/auth-client";

import userImg from "../assets/user.png";
import { Button } from "@heroui/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
];

export default function Navbar() {
  const pathname = usePathname();


  const { data, refetch, isPending } = useSession();

  console.log(data);

  const handleLogout = async () => {

    await signOut();

  };

  return (
    <nav className="bg-white  border-gray-200 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-3">
        <div className="flex-1" />

        <div className="flex items-center justify-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium pb-1 transition-colors ${isActive
                  ? "border-b-2 text-brand font-semibold"
                  : "text-gray-600 hover:text-brand"
                  }`}
                style={isActive ? { borderColor: "#D72050", color: "#D72050" } : {}}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          {data?.user ? (
            <>

              <Image
                src={data?.user?.image || userImg}
                alt="Profile"
                width={34}
                height={34}
                loading="eager"
                className="h-8.5 w-8.5 rounded-full border border-black object-cover"
              />


              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : isPending ? (
            <div className="h-9 w-20 animate-pulse rounded bg-zinc-200"></div>
          ) : (
            <Link
              href="/login"
              className="inline-flex h-9 items-center bg-zinc-700 px-5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
