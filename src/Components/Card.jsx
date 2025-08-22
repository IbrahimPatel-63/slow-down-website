import React from "react";

import fivestar from './images/fivestar2.jpg'


function Card({name,secondname,price,image}) {
  return (
    <div className="h-[90%] w-[220px] bg-white flex items-center flex-col flex-nowrap shrink-0 cursor-pointer text-center sm:w-[250px] sm:h- md:w-[200px] lg:w-[204px] xl:w-[270px]">
      <img src={image} alt="" loading="lazy" />
      <h2 className="text-[#595A5C] uppercase text-[11px] tracking-widest mt-2.5">{name}</h2>
      <h1 className="font-semibold mt-1 mb-2">{secondname}</h1>
      <p className="font-semibold text-[16px]">{price}</p>
      <img className="w-[80px] mt-2" src={fivestar} alt="" loading="lazy" />
    </div>
  );
}

export default Card;
