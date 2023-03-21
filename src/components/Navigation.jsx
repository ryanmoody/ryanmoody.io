import React, { useState } from "react";
import { Link } from "gatsby";
import { GoThreeBars } from "react-icons/go";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:block bg-white rounded-full shadow-xl p-4">
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link
              to="/about"
              className="hover:bg-neutral-100 px-4 py-2 rounded-full hover:shadow-inner"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:bg-neutral-100 px-4 py-2 rounded-full hover:shadow-inner"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-neutral-100 px-4 py-2 rounded-full hover:shadow-inner"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:bg-neutral-100 px-4 py-2 rounded-full hover:shadow-inner"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="block md:hidden bg-white rounded-full shadow-xl p-4"
        onClick={() => setOpen(true)}
      >
        <GoThreeBars size={24} />
      </button>
      {open ? <MobileMenu handleClose={() => setOpen(false)} /> : <></>}
    </>
  );
};

export default Navigation;
