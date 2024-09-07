import "./App.css";
import React, { useState, useEffect } from "react";
import CircleType from "circletype"; // If it’s a default export
import RotatingBox from "./components/3D/rotatingBox";

// TODO: Use Framer-Motion to animate the expanding of columns in Project Table more effectively.(1)

// ----------------------------------------------------- Project Row Item ----- //
const ProjectItemRow = ({
  projectName,
  projectType,
  projectLocation,
  projectUrl,
}) => {
  return (
    <div className="projectItemRow flex w-full items-end  border-b-[0.1px] border-b-[#939393] cursor-pointer hover:text-[#D5D5D5] transition-all hover:ease-in-out duration-1000 ">
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

// ----------------------------------------------------------------- App ----- //
function App() {
  return (
    <div className=" max-w-[1400px] flex flex-col w-screen relative justify-center items-center">
      <section className="hero w-full h-[900px] flex justify-between sticky top-0 z-0 bg-top bg-cover bg-no-repeat bg-[url('./images/background-test-1.png')]">
        <div className="itemsLeft font-RomanaRomanBold text-[50px] [&>*]:cursor-pointer pl-2">
          <h1>james brown</h1>
          <h1>developer / designer</h1>
          <h1>framer-motion</h1>
          <h1>ex.sses</h1>
          <h1>Maya Vika</h1>
          <h1>DJ Pitch</h1>
          <h1>Angel Rocket</h1>
        </div>
        <div className="h-full flex items-center justify-center">
          <RotatingBox />
        </div>

        <div className="itemsRight font-RomanaRomanBold text-[50px] flex flex-col items-end justify-end [&>*]:cursor-pointer pr-2">
          <h1>development process</h1>
          <h1>projects</h1>
          <h1>munni</h1>
          <h1>about me</h1>
          <h1>contact</h1>
          <h1>about me</h1>
          <h1>contact</h1>
        </div>
      </section>

      <section className="projects w-[99%] h-[900px] flex items-center justify-center bg-slate-800 p-6 rounded-t-lg z-10 sticky top-0">
        <div className="grid grid-rows-10 w-full h-full">
          <div className="projectItemRow rowItem0 flex w-full items-end border-b-[0.1px] border-b-[#939393]">
            <div className=" flex items-center justify-center gap-2 p-2">
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
          {/* Reusable Project Rows */}
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
      <section className="contact w-[99%] h-[30px] flex items-start  justify-evenly z-10 bg-slate-800">
        <div className="aboutMe w-[45%] bg-[#F7F7F7] p-6 rounded-t-lg">
          <h1>about me</h1>
        </div>
        <div className="aboutMe w-[45%] bg-[#F7F7F7] p-6 rounded-t-lg">
          <h1> contact</h1>
        </div>
      </section>
    </div>
  );
}

export default App;
