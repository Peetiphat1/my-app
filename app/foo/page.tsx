import React from 'react'
import Image from 'next/image'

export default function foo() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <h1 className='text-[8rem] text-blue-500 font-bold text-shadow-lg italic'>
            Fool
            </h1>
            <Image src="/meowl.jpeg" height={100} width={100} alt='cat'/>
        </div>
  )
}
