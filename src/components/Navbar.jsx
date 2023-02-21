import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center justify-between border-b border-violet-800">
      <Link to="/" className="logo text-2xl font-medium text-violet-400">
        Proxima
      </Link>
    </div>
  );
};

export default Navbar;
