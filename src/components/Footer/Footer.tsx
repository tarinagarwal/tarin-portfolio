import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
interface FooterProps {
  activeLink: string;
  handleClick: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ activeLink, handleClick }) => {
  return (
    <>
      <footer className="w-full bg-[#22242f] py-12 text-muted-foreground border-t border-[#c497fe]">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl font-bold text-[#c497fe]">Socials</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Link
                to="#"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" className="h-6 w-6" />
              </Link>
              <Link
                to="https://github.com/tarinagarwal"
                aria-label="Github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" className="h-6 w-6 " />
              </Link>
              <Link
                to="https://www.instagram.com/tarinagarwal/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" className="h-6 w-6 " />
              </Link>
              <Link
                to="https://www.linkedin.com/in/tarin-agarwal-810793267/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" className="h-6 w-6 " />
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h4 className="text-lg font-semibold text-[#c497fe]">
              Quick Links
            </h4>
            <nav className="grid gap-2 text-white">
              <Link
                to="/home"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/home" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/home")}
              >
                Home
              </Link>
              <Link
                to="/about-me"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/about-me" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/about-me")}
              >
                About Me
              </Link>
              <Link
                to="/skills"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/skills" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/skills")}
              >
                Skills
              </Link>
            </nav>
          </div>
          <div className="grid gap-4">
            <h4 className="text-lg font-semibold text-[#c497fe]">Portfolio</h4>
            <nav className="grid gap-2 text-white">
              <Link
                to="/projects"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/projects" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/projects")}
              >
                Projects
              </Link>
              <Link
                to="/blogs"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/blogs" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/blogs")}
              >
                Blogs
              </Link>
              <Link
                to="/gallery"
                className={`text-sm hover:underline hover:text-[#c4f582] ${
                  activeLink === "/gallery" ? "text-[#c497fe]" : ""
                }`}
                onClick={() => handleClick("/gallery")}
              >
                Gallery
              </Link>
            </nav>
          </div>
          <div className="grid gap-4">
            <h4 className="text-lg font-semibold text-[#c497fe]">Contact</h4>
            <nav className="grid gap-2 text-white">
              <Link
                to="tel:+919352023583"
                className="flex items-center gap-2 hover:underline hover:text-[#c4f582]"
              >
                <PhoneIcon className="h-5 w-5" />
                <span className="text-sm">+91 9352023583</span>
              </Link>
              <Link
                to="mailto:tarinagarwal@gmail.com"
                className="flex items-center gap-2 hover:underline hover:text-[#c4f582]"
              >
                <MailIcon className="h-5 w-5" />
                <span className="text-sm">tarinagarwal@gmail.com</span>
              </Link>
              <Link
                to="https://www.google.com/maps/search/?api=1&query=Bangalore,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline hover:text-[#c4f582]"
              >
                <LocateIcon className="h-5 w-5" />
                <span className="text-sm">Bangalore, India</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t border-black pt-6 text-center text-sm text-white">
          <p>&copy; 2024 <span className="text-[#c4f582]">Tarin Agarwal</span>. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
