import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineSetting } from "react-icons/ai";
import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("userDetails");

  const logout = useCallback(() => {
    localStorage.clear();
    navigate("/sign-in");
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="navbar__logo">To Do App</h3>
      </Link>

      {user && (
        <div className="navbar__links">
          <Link to="/settings" className="navbar__settings-link">
            <AiOutlineSetting className="icon" />
          </Link>
          <GrLogout className="icon navbar__logout-link" onClick={logout} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
