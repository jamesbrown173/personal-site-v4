import React from "react";
import { easeInOut, motion } from "framer-motion";

const ProjectsTable = () => {
  // Project Row Item with framer-motion hover effect
  const ProjectItemRow = ({
    projectName,
    projectType,
    projectLocation,
    projectUrl,
  }) => {
    return (
      // When I hover over a row in this grid, it's going to display a div next to the mouse which has a gif animation preview of the website. Is this achieveable?

      <div className="projectItemRow flex w-full items-end border-b-[0.1px]  hover:bg-[#313D4B] border-b-[#939393] cursor-pointer transition-all duration-300 ease-in-out">
        <div className="w-[50%]">
          <h1 className="font-RomanaRomanNormal text-[40px]">{projectName}</h1>
        </div>
        <div className="w-[25%] text-[20px]">
          <h3 className="font-Helvetica">{projectType}</h3>
        </div>
        <div className="w-[25%] text-[20px]">
          <h3 className="font-Helvetica">{projectLocation}</h3>
        </div>
      </div>
    );
  };

  return (
    <section className="projects w-[99%] h-[900px] flex items-center justify-center bg-slate-800 p-6 rounded-t-lg z-10 sticky top-0">
      <div className="projectsTable grid grid-rows-9 grid-cols-1 w-full h-full justify-start">
        <div className="projectItemRow rowItem0 flex w-full items-end border-b-[0.1px] border-b-[#939393]">
          <div className="flex items-center justify-center gap-2 p-2">
            <span>All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              className="mt-[0.9px] size-3"
            >
              <path
                d="M7 11L0.937822 0.5L13.0622 0.500001L7 11Z"
                fill="#939393"
              />
            </svg>
          </div>
        </div>

        {/* Project Item Rows */}
        <ProjectItemRow
          projectName="interior-design-project"
          projectType="design-development"
          projectLocation="hoc-chi-minh-city"
          projectUrl="https://www.google.com"
        />
        <ProjectItemRow
          projectName="sensa-project"
          projectType="development-framer"
          projectLocation="marketing-agency"
          projectUrl="https://www.google.com"
        />
        <ProjectItemRow
          projectName="zweet-project"
          projectType="design-development"
          projectLocation="drinks-beverage-ui"
          projectUrl="https://www.google.com"
        />
        <ProjectItemRow
          projectName="canal-street-project"
          projectType="development"
          projectLocation="marketing-advertising"
          projectUrl="https://www.google.com"
        />
        <ProjectItemRow
          projectName=" "
          projectType=" "
          projectLocation=" "
          projectUrl="https://www.google.com"
        />
        <ProjectItemRow
          projectName=" "
          projectType=" "
          projectLocation=" "
          projectUrl="https://www.google.com"
        />
      </div>
    </section>
  );
};

export default ProjectsTable;
