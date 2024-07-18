import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent"
        >
          <Link href="https://www.facebook.com/" target="_blank">
            <RiFacebookFill className="text-gray-200" />
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent"
        >
          <Link href="https://www.instagram.com/" target="_blank">
            <RiInstagramLine className="text-gray-200" />
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent"
        >
          <Link href="https://x.com/" target="_blank">
            <RiTwitterXFill className="text-gray-200" />
          </Link>
        </Button>
      </li>
      <li>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent"
        >
          <Link href="https://www.linkedin.com/" target="_blank">
            <RiLinkedinFill className="text-gray-200" />
          </Link>
        </Button>
      </li>
    </ul>
  );
};
