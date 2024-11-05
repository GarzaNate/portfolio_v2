import React from "react";
import profileImage from "../assets/heroImage2.jpg"; // Make sure to place your image in this path or adjust accordingly

const Hero = () => {
  return (
    <section className="bg-light-background dark:bg-dark-background h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-12 p-6">
      
      {/* Profile Image */}
      <div className="flex-shrink-0 mb-10 md:mb-0"> {/* Add bottom margin for spacing */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-64 h-auto md:w-80 md:h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Introduction Section */}
      <div className="space-y-4"> {/* Added space between the text elements */}
        <h1 className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary mb-4">
          Hi, I'm Josue Garza
        </h1>
        <p className="text-lg md:text-xl text-light-text dark:text-dark-text mb-6 max-w-md">
          I’m a fullstack developer and problem solver with a passion for building efficient and impactful solutions. With expertise in modern web technologies, I love tackling complex challenges and continuously learning in the world of development.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          <a
            href="/resume.pdf" // Replace with your actual resume file path
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-background rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            View Resume
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-background rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            Learn More
          </a>
          <a
            href="/projects"
            className="px-6 py-3 bg-light-accent text-dark-text dark:bg-dark-accent dark:text-dark-background rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
