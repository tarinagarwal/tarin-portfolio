import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    const handleLocationChange = () => {
      setActiveLink(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleClick = (path: string) => {
    setActiveLink(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeLink={activeLink} handleClick={handleClick} />
      <Outlet context={{ handleClick }} />
      <Footer />
    </>
  );
};

export default MainLayout;
