import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-20 bg-slate-600 text-white p-5 text-2xl fixed top-0 left-0 w-full">
      <h2 className="hover:text-slate-300 hover:underline">
        <Link to={"/"}>Home</Link>
      </h2>
      <h2 className="hover:text-slate-300 hover:underline">
        <Link to={"login"}>Login</Link>
      </h2>
      <h2 className="hover:text-slate-300 hover:underline">
        <Link to={"signup"}>Signup</Link>
      </h2>
    </div>
  );
};

export default Navbar;
