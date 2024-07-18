import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Nav } from "@/components/Nav";
import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="bg-gray-950 text-gray-200">
      <div className="container flex justify-between items-center py-5">
        <Logo />
        <Nav />
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
