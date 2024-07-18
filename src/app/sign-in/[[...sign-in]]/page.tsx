import Link from "next/link";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-[calc(100vh-200px)]">
      <SignIn />
      <p className="text-sm text-gray-500">
        Forgot password?{" "}
        <Link href="/forgot-password" className="text-blue-500">
          Click here
        </Link>
      </p>
    </div>
  );
}
