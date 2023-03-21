import { Link, navigate } from "gatsby";
import * as React from "react";
import { GoX } from "react-icons/go";
import Logo from "../images/logo.svg";

const MobileMenu = ({ handleClose }) => {
  return (
    <div className="flex flex-col gap-16 fixed inset-0 h-screen bg-neutral-300 backdrop-blur-sm bg-opacity-90 z-10 p-6">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={() => {
            handleClose();
            navigate("/");
          }}
        >
          <img alt="Logo" src={Logo} height={60} width={60} />
        </button>
        <button className="mr-4 cursor-pointer" onClick={handleClose}>
          <GoX size={24} />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-12 font-bold text-4xl">
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

export default MobileMenu;
