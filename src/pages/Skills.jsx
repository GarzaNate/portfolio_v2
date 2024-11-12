import { Card } from 'flowbite-react';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiDjango, DiMysql, DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiFlask, SiGit, SiGithub, SiVisualstudiocode } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="p-4 shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCategory
              title="Frontend"
              skills={[
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "Vue", icon: <FaVuejs /> }
              ]}
            />
            <SkillCategory
              title="Backend"
              skills={[
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python", icon: <FaPython /> },
                { name: "Django", icon: <DiDjango /> },
                { name: "Flask", icon: <SiFlask /> }
              ]}
            />
            <SkillCategory
              title="Databases"
              skills={[
                { name: "MySQL", icon: <DiMysql /> },
                { name: "MongoDB", icon: <DiMongodb /> },
                { name: "PostgreSQL", icon: <DiPostgresql /> }
              ]}
            />
            <SkillCategory
              title="Tools"
              skills={[
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <SiGithub /> },
                { name: "VS Code", icon: <SiVisualstudiocode /> }
              ]}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Card className="p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <span className="text-lg text-blue-500">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </Card>
  </motion.div>
);

export default Skills;
