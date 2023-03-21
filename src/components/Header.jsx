import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="p-6 bg-neutral-100 flex flex-row justify-between items-center">
      <Link to="/">
        <img alt="Logo" src={Logo} height={60} width={60} />
      </Link>
      <nav className="text-sm md:text-md uppercase">
        <ul className="flex flex-row items-center gap-5 md:gap-10 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
