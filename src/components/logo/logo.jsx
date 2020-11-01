import React from "react";
import { Link } from "react-router-dom";

import Logo from "./logo/mentalheal.png";
import "./logo.css";

function logo() {
  return (
    <Link className="logo-container" to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>
  );
}

export default logo;
