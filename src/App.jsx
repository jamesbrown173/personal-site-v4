import "./App.css";
import React, { useState, useEffect } from "react";
import CircleType from "circletype"; // If it’s a default export
import RotatingBox from "./components/3D/rotatingBox";
import { motion } from "framer-motion";
import ProjectsTable from "./components/sections/ProjectsTable";

import Hero from "./components/sections/Hero";

// TODO: 3D Model for Hero page (1)
// TODO: Video elements for projects page (2)
// TODO: Layout for Projects page (3)
// TODO: Layout for contact page (4)
// TODO: Links for contact page (5)

function App() {
  return (
    <div className=" max-w-[1400px] flex flex-col w-screen relative justify-center items-center">
      <Hero />
      {/* Selected Works */}
      <section className="projects w-[99%] h-[100px] flex items-center bg-[#1E2A3B] p-6 rounded-t-xl z-10 sticky top-0">
        <div className="w-full border-b-2 border-b-[#4D545E]">
          <h1 className="text-[45px] font-RomanaRomanNormal">
            Selected Works{" "}
          </h1>
        </div>
      </section>
      <ProjectsTable />
    </div>
  );
}

export default App;
