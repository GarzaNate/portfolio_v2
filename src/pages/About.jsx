import React from "react";
import { Card, Badge } from "flowbite-react";

const AboutMe = () => {
  return (
    <section className="py-16 px-8 bg-light-background dark:bg-dark-background" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Side Content */}
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-6">
            About Me
          </h2>
          
          <Card className="bg-light-card dark:bg-dark-card p-8 shadow-lg rounded-lg transition-all duration-300">
            <div className="text-lg text-light-text dark:text-dark-text space-y-4">
              <p>
                I’m a dedicated and passionate fullstack developer with a knack for problem-solving and a love for learning. With a background in both frontend and backend development, I thrive in creating intuitive and efficient user experiences.
              </p>
              <p>
                My journey in software began with a fascination for how technology impacts our daily lives. Over time, I’ve honed my skills across multiple frameworks and languages, and I’m continuously excited to deepen my knowledge in this ever-evolving field.
              </p>
              <p>
                Outside of coding, I enjoy [mention a few interests here like traveling, reading, or another unique hobby]. My experiences beyond the screen often inspire my work and bring fresh perspectives into my projects.
              </p>
            </div>
          </Card>

          {/* Hobbies and Interests */}
          <div className="mt-6 flex flex-wrap space-x-4">
            <Badge color="blue" className="p-2 text-lg font-semibold dark:bg-dark-badge">
              Hiking
            </Badge>
            <Badge color="green" className="p-2 text-lg font-semibold dark:bg-dark-badge">
              Music
            </Badge>
            <Badge color="purple" className="p-2 text-lg font-semibold dark:bg-dark-badge">
              Gaming
            </Badge>
            <Badge color="yellow" className="p-2 text-lg font-semibold dark:bg-dark-badge">
              Photography
            </Badge>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="md:w-1/3 flex flex-col space-y-4">
          <img 
            // src="path/to/image1.jpg" 
            alt="Profile Image 1" 
            className="rounded-lg shadow-lg object-cover h-40 w-full" 
          />
          <img 
            // src="path/to/image2.jpg" 
            alt="Profile Image 2" 
            className="rounded-lg shadow-lg object-cover h-40 w-full" 
          />
          <img 
            // src="path/to/image3.jpg" 
            alt="Profile Image 3" 
            className="rounded-lg shadow-lg object-cover h-40 w-full" 
          />
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
