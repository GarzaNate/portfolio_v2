import React, { useState } from "react";
import { Navbar, DarkThemeToggle } from "flowbite-react";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Navbar fluid className="bg-light-background dark:bg-dark-background">
        <Navbar.Brand as={ScrollLink} to="home" smooth={true} offset={-70} duration={500}>
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-light-text dark:text-dark-text">
            Josue Garza
          </span>
        </Navbar.Brand>

        <div className="flex items-center md:order-2">
   
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

          <Navbar.Collapse className={`flex ${menuOpen ? "block" : "hidden md:flex"} md:flex-row`}>
            {['home', 'projects', 'skills', 'contact'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)} // Auto-close menu on mobile
                className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary md:ml-4 hover:cursor-pointer hover:border-b-2 border-light-primary dark:border-dark-primary transition ease-in-out duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </Navbar.Collapse>
          <DarkThemeToggle className="ml-4" darkThemeClassName="dark" lightThemeClassName="light"/>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
