import React from "react";
import Videocard from "./Videocard";
import video1 from './Videos/v1.mp4'
import video2 from './Videos/v2.mp4'
import video3 from './Videos/v3.mp4'
import video4 from './Videos/v4.mp4'
import video5 from './Videos/v5.mp4'
import video6 from './Videos/v6.mp4'
import video7 from './Videos/v7.mp4'
import video8 from './Videos/v8.mp4'
import video9 from './Videos/v9.mp4'
import video10 from './Videos/v10.mp4'
import video11 from './Videos/v11.mp4'
import bigcat from './images/Big-Cats1.jpg'
import Shelly1 from './images/Shelly1.jpg'
import mercer from './images/Mercer1.jpg'
import p1 from './images/p1.webp'
import hudson from './images/Hudson1.jpg'
import p3 from './images/p3.webp'
import setting from './images/setting.webp'
import barbose1 from './images/Barbosa1.jpg'
import cardimage1 from './images/cardimage1.webp'
import frantz from './images/Frantz1.jpg'


function Videosection() {
  return (
    <div className="h-95 w-full bg-white px-4  flex items-center justify-between overflow-auto gap-4 sm:h-160 sm:w-full md:h-130 md:w-full lg:h-120 lg:w-full xl:h-140 xl:w-full">
      <Videocard video={video1}  name='Shelley Throw' price='Rs. 22,100.00' image={Shelly1} />
      <Videocard video={video2}  name='Bit Cats Mini Blanket' price='Rs. 12,400.00' image={bigcat}/>
      <Videocard video={video3}  name='Mercer Throw' price='Rs. 22,100.00' image={mercer}/>
      <Videocard video={video4}  name='Guarena Throw' price='Rs. 22,100.00' image={p1}/>
      <Videocard video={video5}  name='Hudson Throw' price='Rs. 22,100.00' image={hudson}/>
      <Videocard video={video6}  name='Barbosa Throw' price='Rs. 22,100.00' image={barbose1}/>
      <Videocard video={video7}  name='Felix Throw' price='Rs. 22,100.00' image={cardimage1}/>
      <Videocard video={video8} name='Dumont Throw' price='Rs. 22,100.00' image={p3} />
      <Videocard video={video9}  name='Dumont Throw' price='Rs. 22,100.00' image={p3}/>
      <Videocard video={video10}  name='Frantz Throw' price='Rs. 22,100.00' image={frantz}/>
      <Videocard video={video11}  name='Everybody Night Light - Y...' price='Rs. 22,100.00' image={setting}/>
    
    </div>
  );
}

export default Videosection;
