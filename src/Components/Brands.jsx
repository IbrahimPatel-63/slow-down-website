import React from "react";
import newyork from "./images/newyork.avif";
import logo from "./images/logo.png";
import hype from "./images/hype.avif";
import df from "./images/df.avif";
import su from "./images/su.webp";
import domino from "./images/domino.avif";
import pop from "./images/pop.avif";

function Brands() {
  return (
    <div className="h-60 w-full bg-white flex items-center justify-around flex-wrap gap-5 xl:h-40">
      <img className="w-[160px] h-[25px]" src={newyork} alt="" />
      <img className="w-[160px] h-[40px]" src={logo} alt="" />

      <img className="w-[160px] h-[20px]" src={hype} alt="" />
      <img className="w-[160px] h-[25px]" src={df} alt="" />

      <img className="w-[160px] h-[65px]" src={su} alt="" />
      <img className="w-[160px] h-[35px]" src={domino} alt="" />

      <img className="w-[160px] h-[45px]" src={pop} alt="" />
    </div>
  );
}

export default Brands;
