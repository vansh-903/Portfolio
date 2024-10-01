import React from 'react';
import './skills.css'; // Assuming you already have the styles in skills.css
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaMoneyBillWave, FaFileAlt, FaFileExcel, FaVideo } from 'react-icons/fa';
import { SiMongodb, SiPowerbi, SiMysql, SiCplusplus, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">

        {/* Technologies Column */}
        <div className="skills-column">
          <h3 className="column-title">Technologies</h3>
          <div className="icons-container">

            <div className="tech-icon-container">
              <FaHtml5 className="tech-icon text-orange" />
              <span className="tooltip-text">HTML - Intermediate</span>
            </div>

            <div className="tech-icon-container">
              <FaCss3Alt className="tech-icon text-blue" />
              <span className="tooltip-text">CSS - Intermediate</span>
            </div>

            <div className="tech-icon-container">
              <FaJs className="tech-icon text-yellow" />
              <span className="tooltip-text">JavaScript - Intermediate</span>
            </div>

            <div className="tech-icon-container">
              <FaReact className="tech-icon text-cyan" />
              <span className="tooltip-text">React - Intermediate</span>
            </div>

            <div className="tech-icon-container">
              <TbBrandNextjs className="tech-icon" />
              <span className="tooltip-text">Next.js - Basic</span>
            </div>

            <div className="tech-icon-container">
              <FaNodeJs className="tech-icon text-green" />
              <span className="tooltip-text">Node.js - Basic</span>
            </div>

            <div className="tech-icon-container">
              <SiCplusplus className="tech-icon text-blue" />
              <span className="tooltip-text">C++ - Intermediate</span>
            </div>

            <div className="tech-icon-container">
              <SiMongodb className="tech-icon text-green" />
              <span className="tooltip-text">MongoDB - Basic</span>
            </div>

          </div>
        </div>

        {/* Tools and Other Column */}
        <div className="skills-column">
          <h3 className="column-title">Tools and Other</h3>
          <div className="icons-container">

            <div className="tech-icon-container">
              <FaFileAlt className="tech-icon text-blue" />
              <span className="tooltip-text">MS Office - Basic</span>
            </div>

            <div className="tech-icon-container">
              <FaFileExcel className="tech-icon text-green" />
              <span className="tooltip-text">MS Excel - Basic</span>
            </div>

            <div className="tech-icon-container">
              <SiMysql className="tech-icon text-blue" />
              <span className="tooltip-text">SQL - Basic</span>
            </div>

            <div className="tech-icon-container">
              <SiPowerbi className="tech-icon text-yellow" />
              <span className="tooltip-text">Power BI - Basic</span>
            </div>

            <div className="tech-icon-container">
              <FaGitAlt className="tech-icon text-red" />
              <span className="tooltip-text">Git - Basic</span>
            </div>

            <div className="tech-icon-container">
              <SiVisualstudiocode className="tech-icon text-blue" />
              <span className="tooltip-text">VS Code - Basic</span>
            </div>

            <div className="tech-icon-container">
              <FaMoneyBillWave className="tech-icon text-green" />
              <span className="tooltip-text">Finance - Basic</span>
            </div>

            <div className="tech-icon-container">
              <FaVideo className="tech-icon text-purple" />
              <span className="tooltip-text">DaVinci Resolve - Basic</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
