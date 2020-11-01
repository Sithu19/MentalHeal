import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Logo from "../logo/logo";

function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="heab">
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/test">
          Test
        </Link>
      </div>
    </div>
  );
}

export default Header;
