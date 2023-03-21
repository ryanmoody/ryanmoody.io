import * as React from "react";
import { Link } from "gatsby";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 py-4 bg-black text-neutral-100 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
      <span className="text-xs md:text-sm">
        Copyright &copy; 2023 Ryan Moody. All rights reserved.
      </span>
      <nav>
        <ul className="flex gap-4 md:gap-6">
          <li>
            <Link to="https://github.com/ryanmoody">
              <FaGithub size={24} />
            </Link>
          </li>
          <li>
            <Link to="https://linkedin.com/in/ryanmoodyengineer">
              <FaLinkedin size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
