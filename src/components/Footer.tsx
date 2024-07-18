import { Logo } from "@/components/Logo";
import { Social } from "@/components/Social";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container flex justify-between items-center py-5">
        <Logo />
        Footer
        <Social />
      </div>
    </footer>
  );
};
