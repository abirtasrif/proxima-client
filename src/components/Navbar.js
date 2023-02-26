import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-16 flex items-center justify-between border-b border-violet-800">
      <Link to="/" className="logo text-2xl font-medium text-violet-400">
        Proxima
      </Link>
      <nav className="flex gap-5">
        <Link to="/login" className="hover:text-violet-400 duration-300">
          Login
        </Link>
        <Link to="/signup" className="hover:text-violet-400 duration-300">
          Signup
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
