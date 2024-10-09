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
          <span className="self-center text-xl font-semibold whitespace-nowrap text-light-text dark:text-dark-text">
            Josue Garza
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <DarkThemeToggle />
          <button
            onClick={toggleMenu}
            className="ml-2 inline-flex items-center p-2 text-sm text-light-text rounded-lg md:hidden hover:bg-light-accent dark:text-dark-text dark:hover:bg-dark-accent"
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
            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary"
          >
            Contact
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
