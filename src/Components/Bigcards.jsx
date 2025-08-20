import React from 'react'
import Singlebigcard from './Singlebigcard'
import cardimage1 from './images/cardimage1.webp'
import cardimage2 from './images/cardimage2.webp'
import cardimage3 from './images/cardimage3.jpg'
import cardimage4 from './images/cardimage4.webp'

function Bigcards() {
  return (
    <div className='h-180 w-full bg-white flex items-center gap-10 overflow-auto px-4 sm:gap-7 md:px-15 lg:px-10 md:gap-8 xl:flex xl:items-center justify-between xl:px-25  '>
        <Singlebigcard name='Jane H. Verified buyer' image={cardimage1} description='I’m obsessed with this woven throw! The Felix Throw from Slowdown Studio is not just a blanket, its basically a piece of art for your couch or your walls....'/>
        <Singlebigcard name='Nazia W. Verified buyer' image={cardimage2} description='I fell in love with Slowdown Studio throws the minute I laid eyes on one at my friends place and immediately ordered one for our home. It soon became the statement piece of our....' />
        <Singlebigcard name='Cristina P. Verified buyer' image={cardimage3} description='I’ve been a loyal Slowdown Studio customer for several years and always look forward to my next purchase. In particular, their blankets are beautifully made and I love their ever....' />
        <Singlebigcard name='Deb H. Verified buyer' image={cardimage4} description='I love this pillow cover!  I also ordered a second one in a different pattern from the same artist.  They are both so beautiful, really cool.  I’m extremely happy that I bought them....' />
        

        

      
    </div>
  )
}

export default Bigcards
