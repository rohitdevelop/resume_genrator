import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link to="/" className="text-blue-600 hover:underline">
        Home
      </Link>
      <Link to="/review" className="text-blue-600 hover:underline">
        Review
      </Link>
    </div>
  );
};

export default Navbar;
