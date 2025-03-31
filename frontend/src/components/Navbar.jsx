import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Shop Simulator</Link>
      <Link to="/create">
        <button>add</button>
      </Link>
    </div>
  );
};

export default Navbar;
