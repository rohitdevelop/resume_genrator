import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300
     ${
       location.pathname === path
         ? "bg-blue-600 text-white shadow-md"
         : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
     }`;

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
                    flex gap-2 sm:gap-4
                    bg-white/70 backdrop-blur-lg
                    border border-white/30
                    shadow-lg rounded-full
                    px-4 py-2 mb-4">
      <Link to="/" className={linkStyle("/")}>
        Home
      </Link>

      <Link to="/Generetor" className={linkStyle("/Generetor")}>
        Resume
      </Link>

      <Link to="/review" className={linkStyle("/review")}>
        Review
      </Link>
    </nav>
  );
};

export default Navbar;
