import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div>
      <div>
        <span>Ryan Moody</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
