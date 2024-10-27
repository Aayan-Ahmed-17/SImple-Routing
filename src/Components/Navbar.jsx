import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-6">
      <h2>
        <Link to={"/"}>Home</Link>
      </h2>
      <h2>
        <Link to={"login"}>Login</Link>
      </h2>
      <h2>
        <Link to={"signup"}>Signup</Link>
      </h2>
    </div>
  );
};

export default Navbar;
