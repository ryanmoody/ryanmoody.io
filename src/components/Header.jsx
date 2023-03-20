import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="bg-neutral-100 flex flex-row justify-between items-center p-6">
      <Link>
        <img src={Logo} height={60} width={60} />
      </Link>
      <nav className="text-sm md:text-md uppercase">
        <ul className="flex flex-row gap-5 md:gap-10">
          <li className="font-bold hover:text-black">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold hover:text-black">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold hover:text-black">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
