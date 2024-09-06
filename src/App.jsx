import "./App.css";
import React, { useState } from "react";

const ProjectItemRow = ({ projectName, projectType, projectLocation }) => {
  return (
    <div className="projectItemRow flex w-full items-end border-b-[0.1px] border-b-[#939393]">
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

function App() {
  return (
    <div className=" max-w-[1400px] flex flex-col w-screen relative justify-center items-center">
      <section className="hero w-full h-[900px] flex justify-between sticky top-0 z-0 bg-top bg-cover bg-no-repeat bg-[url('./images/background-test-1.png')]">
        <div className="itemsLeft font-RomanaRomanBold text-[50px] [&>*]:cursor-pointer pl-2">
          <h1>object blue</h1>
          <h1>aya</h1>
          <h1>b2b BFFT</h1>
          <h1>ex.sses</h1>
          <h1>Maya Vika</h1>
          <h1>DJ Pitch</h1>
          <h1>Angel Rocket</h1>
        </div>
        <div className="circle bg-red-600 h-[200px] w-[200px] flex items-center justify-center rounded-full relative self-center">
          <div className="circleText font-serif font-thin italic w-full h-full absolute">
            {" "}
            a b c d e f g h i{" "}
          </div>
        </div>
        <div className="itemsRight font-RomanaRomanBold text-[50px] flex flex-col items-end justify-end [&>*]:cursor-pointer pr-2">
          <h1>DJ Python</h1>
          <h1>DJ Corpmane</h1>
          <h1>munni</h1>
          <h1>Madjestic</h1>
          <h1>Kasual</h1>
          <h1>Rish</h1>
          <h1>AF85</h1>
          <h1>Ian Kim Judd</h1>
        </div>
      </section>

      <section className="projects w-[99%] h-[900px] flex items-center justify-center bg-slate-800 p-6 rounded-t-lg z-10">
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
          />
          <ProjectItemRow
            projectName="sensa-project"
            projectType="development-framer"
            projectLocation="marketing-agency"
          />
          <ProjectItemRow
            projectName="zweet-project"
            projectType="design-development"
            projectLocation="drinks-beverage-ui"
          />
          <ProjectItemRow
            projectName="canal-street-project"
            projectType="development"
            projectLocation="marketing-advertising"
          />
          <ProjectItemRow projectName=" " projectType=" " projectLocation=" " />
          <ProjectItemRow projectName=" " projectType=" " projectLocation=" " />
        </div>
      </section>
    </div>
  );
}

export default App;
