import Link from "next/link";
import { RiNextjsFill } from "react-icons/ri";
import { SiClerk, SiMongodb } from "react-icons/si";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 p-2 border-2 rounded-md border-gray-200/50"
    >
      <RiNextjsFill className="w-9 h-9 text-gray-200/50" />
      <SiClerk className="w-7 h-7 text-blue-300" />
      <SiMongodb className="w-8 h-8 text-green-500" />
    </Link>
  );
};
