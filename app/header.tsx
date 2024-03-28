"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";

function AccountDropdown() {
  const session = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"link"}>
          <Avatar className="mr-2">
            <AvatarImage src={session.data?.user.image ?? ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {session.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            signOut({
              callbackUrl: "/",
            })
          }
        >
          <LogOutIcon className="mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const session = useSession();

  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gray-200 dark:bg-gray-900  container mx-auto py-2 z-10 relative">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex gap-2 items-center text-xl hover:underline">
          <Image src="/icon.png" width="60" height="60" alt="the application logo" />
          DevFinder
        </Link>

        <nav className="flex gap-8">
          {isLoggedIn && (
            <>
              <Link href="/browse" className="hover:underline">
                Browse
              </Link>
              <Link href="/your-rooms" className="hover:underline">
                Your Rooms
              </Link>
            </>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {isLoggedIn && <AccountDropdown />}
          {!isLoggedIn && (
            <Button variant="link" onClick={() => signIn()}>
              <LogInIcon className="mr-2" /> Sign in
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
