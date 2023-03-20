import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="bg-neutral-100 flex flex-row justify-between items-center p-6">
      <Link className="font-bold text-lg md:text-2xl uppercase" to="/">
        Ryan Moody
      </Link>
      <nav className="text-sm md:text-md">
        <ul className="flex flex-row gap-5 md:gap-10">
          <li className="font-bold hover:text-neutral-700">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold hover:text-neutral-700">
            <Link to="/about">About</Link>
          </li>
          <li className="font-bold hover:text-neutral-700">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
