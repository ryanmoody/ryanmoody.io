import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="p-6 bg-neutral-100 flex flex-row justify-between items-center">
      <Link to="/">
        <img alt="Logo" src={Logo} height={60} width={60} />
      </Link>
      <Navigation />
    </div>
  );
};

export default Header;
