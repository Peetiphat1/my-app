import Image from 'next/image'
import React from 'react'

export default function HOME() {
  return (
    <div>
      

      

      <div className='m-2 text-2xl font-bold text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quis.</div>
      <img className='w-[23em] rounded-4xl m-5 ' src="https://preview.redd.it/freaky-meowl-v0-pvmcmt558hhf1.jpeg?auto=webp&s=e544c90cd08ad9e9d4d1667a9baed6845ead1988" alt="meowl" />
    
    <Image className='w-[23em] rounded-4xl m-5 ' loading="eager" width={500} height={500} src="https://preview.redd.it/freaky-meowl-v0-pvmcmt558hhf1.jpeg?auto=webp&s=e544c90cd08ad9e9d4d1667a9baed6845ead1988" alt='meowl'/>
    
    
    </div>
  )
}

