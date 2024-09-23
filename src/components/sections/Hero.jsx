import React from "react";
import RotatingBox from "../3D/rotatingBox";

const Hero = () => {
  return (
    <section className="hero w-full h-[900px] flex justify-between sticky top-0 z-0 bg-top bg-cover bg-no-repeat bg-[url('./images/background-test-1.png')]">
      <div className="itemsLeft justify-start flex flex-col font-RomanaRomanBold text-[40px] [&>*]:cursor-pointer pl-2">
        <h1>james brown</h1>
        <h1>developer / designer</h1>
        <h1>freelance</h1>
        <h1>SEP 24</h1>
        <h1>develop advantage</h1>
        <h1>book call </h1>
      </div>
      <div className="h-full flex items-center justify-center">
        <RotatingBox />
      </div>

      <div className="itemsRight font-RomanaRomanBold text-[60px] flex flex-col items-start justify-end [&>*]:cursor-pointer pr-2">
        <h1>services</h1>
        <h1>works</h1>
        <h1>contact</h1>
        <h1>services</h1>
        <h1>works</h1>
        <h1>contact</h1>
      </div>
    </section>
  );
};

export default Hero;
