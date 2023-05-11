import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#3B2F2F] flex justify-center text-neutral-content rounded">
      <Link className="btn btn-ghost normal-case text-xl"><FaCoffee></FaCoffee> Caffeine Haven</Link>
    </div>
  );
};

export default Navbar;
