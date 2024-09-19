import React, { useState } from "react";
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-primary-text dark:text-dark-text">
            My Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <Navbar.Collapse className={menuOpen ? "block" : "hidden md:flex"}>
          <Link
            to="/"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
