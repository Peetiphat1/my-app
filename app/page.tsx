import Image from 'next/image'
import React from 'react'

export default function HOME() {
  return (
    <div >
      
    <div className='flex flex-col justify-center text-[#41393c] box-border w-auto h-[45vh]  p-10 m-5 mt-3 mb-2 rounded-lg  bg-[linear-gradient(to_right,rgba(255,255,255,0.7),rgba(255,255,255,0)),url(https://www.recommend.my/blog/wp-content/uploads/2019/07/1b2b6a5e-84da-4d42-a26e-60c68113d3f6_pasted20image200.jpg)] bg-linear-to-r from-[rgba(255, 255, 255, 0.7)] to-[rgb(255, 255, 255, 0)] bg-cover bg-center'>
      <p className="text-[clamp(1.5rem,5vw,2rem)]  pb-2 font-semibold [text-shadow:_2px_2px_1px_#cb9917]">Lorem ipsum dolor</p>
        <p className="text-[clamp(2rem,5vw,3rem)] mb-[0.5em] font-bold [text-shadow:_2px_2px_1px_#cb9917]">WE ARE THE BEST</p>
        <p className="text-[clamp(1rem,3vw,1.5rem)] mb-[0.5em]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis <br />labore odio magni minima suscipit, cum nostrum laudantium <br />maiores aperiam fugit illum culpa. Asperiores!</p>
        <p className="text-[clamp(1rem,3vw,1.5rem)] mb-0 font-bold py-[0.5em] px-[2em] rounded-[2em] bg-[#41393c] text-white cursor-pointer hover:opacity-90 transition-opacity w-fit">Join us now</p>
    </div>
      <div className="flex justify-between items-center px-4 sm:px-[20rem] py-[0.5em] border-y-2 border-[#b39f99] text-[1.2em] font-bold text-[#41393c]">
  <span className="service">SERVICE1</span>
  <span>SERVICE2</span>
  <span className="hidden sm:block s3">SERVICE3</span>
</div>

   <div className="my-[0.8em] mx-[1em] grid grid-cols-4 gap-[0.5em]">
      <Image 
        src="https://thumbs.dreamstime.com/b/cozy-home-office-plants-natural-light-bright-airy-room-features-white-desk-computer-bulletin-board-lush-greenery-357972554.jpg" 
        height={500} 
        width={500} 
        alt="1" 
        className="w-full h-[25vh] object-cover rounded-[1em] justify-self-center"
      />

      <Image 
        src="https://images.ctfassets.net/wlzmdirin2hy/4AUzrilMPhfNO9GvhfxGj3/d9f008b1a240711d6e9612c77f3ce537/LX_Chicago74_HOM_Maher_03.jpg?w=3840&q=75" 
        height={500} 
        width={500} 
        alt="2" 
        className="w-full h-[25vh] object-cover rounded-[1em] justify-self-center"
      />
      <Image 
        src="https://cdn.shopify.com/s/files/1/0527/4271/7638/files/Neutral-Bedroom-April-Notes-5_1024x1024.jpg?v=1645112850" 
        height={500} 
        width={500} 
        alt="3" 
        className="w-full h-[25vh] object-cover rounded-[1em] justify-self-center"
      />
      <Image 
        src="https://www.laskasas.com/images/Japandi-Style.jpg" 
        height={500} 
        width={500} 
        alt="4" 
        className="w-full h-[25vh] object-cover rounded-[1em] justify-self-center"
      />

    </div>
    
    </div>
  )
}

