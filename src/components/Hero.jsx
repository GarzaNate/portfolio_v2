import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-light-background dark:bg-dark-background h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-primary mb-4">
          Hi, I'm Josue Garza
        </h1>
        <p className="text-lg md:text-xl text-light-text dark:text-dark-text mb-6">
          Fullstack Developer & Problem Solver
        </p>
        <div className="flex space-x-4">
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
      </section>
    </div>
  );
};

export default Hero;
