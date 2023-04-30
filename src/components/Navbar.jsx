import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineSetting } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="navbar__logo">To Do App</h3>
      </Link>
      <Link to="/settings" className="navbar__settings-link">
        <AiOutlineSetting className="navbar__settings-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
