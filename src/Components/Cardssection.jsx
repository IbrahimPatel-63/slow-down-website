import React from "react";
import Card from "./Card";
import p1 from "./images/p1.webp";
import p2 from "./images/p2.webp";
import p3 from "./images/p3.webp";
import p4 from "./images/p4.webp";
import p5 from "./images/p5.webp";
import p6 from "./images/p6.webp";
import p7 from "./images/p7.webp";
import p8 from "./images/p8.webp";


function Cardssection() {
  return (
    <div className="h-105 sm:h-109 xl:h-115 w-full bg-white px-4 flex justify-between items-center gap-4 md:gap-8 md:px-12 overflow-auto">
      <Card image={p1} name="THOMAS GAUDINET" secondname="Guarena Throw" price='Rs. 22,100.00'  />
      <Card image={p2} name="AREAWARE" secondname="Everybody Grinder" price='Rs. 4,300.00' />
      <Card image={p3} name="ROISIN O'DONNELL" secondname="Dumont Throw" price='Rs. 22,100.00'  />
      <Card image={p4} name="ANDREAS SAMUELSSON" secondname="Zappa Knit Blanket" price='Rs. 21,200.00'  />
      <Card image={p5} name="TARTA GELATINA" secondname="Piña Colada Bathmat" price='Rs. 5,300.00'  />
      <Card image={p6} name="SAM SMITH" secondname="Mercer Throw" price='Rs. 22,100.00'  />
      <Card image={p7} name="MAISON BALZAC" secondname="Pomponette Champagne Flutes (Set of 2)" price='Rs. 9,800.00'  />
      <Card image={p8} name="MARCELLO VELHO" secondname="Squiggle Bird Mini Blanket" price='Rs. 12,400.00'  />
    </div>
  );
}

export default Cardssection;
