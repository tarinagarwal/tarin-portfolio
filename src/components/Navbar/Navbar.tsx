import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.png";

interface NavbarProps {
  activeLink: string;
  handleClick: (path: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, handleClick }) => {
  return (
    <div className="flex sticky top-0 w-full flex-col z-10">
      <header className="flex h-16 items-center gap-4 border-b border-[#c497fe] bg-[#22242f] text-white px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/home"
            className={`flex items-center gap-2 font-semibold md:text-base ${
              activeLink === "/home" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/home")}
          >
            <img src={logo} className="h-15 w-20" />
          </Link>
          <Link
            to="/home"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/home" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/home")}
          >
            Home
          </Link>
          <Link
            to="/about-me"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/about-me" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/about-me")}
          >
            About Me
          </Link>
          <Link
            to="/skills"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/skills" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/skills")}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/projects" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/projects")}
          >
            Projects
          </Link>
          <Link
            to="/gallery"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/gallery" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/gallery")}
          >
            Gallery
          </Link>
          <Link
            to="/blogs"
            className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
              activeLink === "/blogs" ? "text-[#c497fe]" : ""
            }`}
            onClick={() => handleClick("/blogs")}
          >
            Blogs
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex justify-between w-full md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 bg-[#22242f]"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <img src={logo} className="h-15 w-20" />
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#22242f] text-white">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/home"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/home" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/home")}
              >
                Home
              </Link>
              <Link
                to="/about-me"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/about-me" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/about-me")}
              >
                About Me
              </Link>
              <Link
                to="/skills"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/skills" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/skills")}
              >
                Skills
              </Link>
              <Link
                to="/projects"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/projects" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/projects")}
              >
                Projects
              </Link>
              <Link
                to="/gallery"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/gallery" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/gallery")}
              >
                Gallery
              </Link>
              <Link
                to="/blogs"
                className={`transition-colors hover:text-[#c4f582] hover:underline underline-offset-4 ${
                  activeLink === "/blogs" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/blogs")}
              >
                Blogs
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;
