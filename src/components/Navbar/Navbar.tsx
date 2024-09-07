import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  User,
  Code,
  Rocket,
  Image,
  BookOpen,
  Star,
} from "lucide-react";
import logo from "../../assets/logo.png";

interface NavbarProps {
  activeLink: string;
  handleClick: (path: string) => void;
}

interface NavLinkProps {
  path: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, handleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavLinkProps[] = [
    { path: "/home", label: "Home", icon: Home },
    { path: "/about-me", label: "About Me", icon: User },
    { path: "/skills", label: "Skills", icon: Code },
    { path: "/projects", label: "Projects", icon: Rocket },
    // { path: "/gallery", label: "Gallery", icon: Image },
    { path: "/blogs", label: "Blogs", icon: BookOpen },
  ];

  const NavLink: React.FC<NavLinkProps> = ({ path, label, icon: Icon }) => (
    <Link
      to={path}
      className={`group flex items-center gap-2 transition-all duration-300 hover:text-purple-400 ${
        activeLink === path ? "text-purple-400" : "text-gray-300"
      }`}
      onClick={() => {
        handleClick(path);
        setIsOpen(false);
      }}
    >
      <Icon className="h-4 w-4" />
      <span className="relative">
        {label}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </span>
    </Link>
  );

  return (
    <motion.div
      className={`fixed top-0 w-full border-b-2 border-gray-900/80 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to="/home"
          className="flex items-center gap-2 font-semibold"
          onClick={() => handleClick("/home")}
        >
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-purple-400"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-gray-900 text-white p-0"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Menu
                </span>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  ></Button>
                </SheetTrigger>
              </div>
              <nav className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <NavLink key={item.path} {...item} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </motion.div>
  );
};

export default Navbar;
