import React from "react";

const Footer = () => {
  return (
    <section className="projects w-[99%] h-[900px] flex flex-row bg-[#1E2A3B] p-6 rounded-t-xl z-10">
      <div className="leftItems flex flex-col justify-between h-full w-1/2 border-r-2 border-r-[#4D545E]">
        <h1 className="font-RomanaRomanNormal text-[50px]">About Me</h1>
        <div className="h-[400px] w-[400px] bg-slate-300"></div>
        <p>
          {" "}
          The desing was made with The desing was made with The desing was made
          with The desing was made with The desing was made with The desing was
          made with The desing was made with The desing was made with The desing
          was made with The desing was made with The desing was made with
        </p>
      </div>
      <div className="rightItems w-1/2 justify-between">
        <h1 className="font-RomanaRomanNormal text-[50px]">Get In Touch</h1>
        <div className="socials">insta</div>
        <div className="contactForm">contact form</div>
      </div>
    </section>
  );
};

export default Footer;
