'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'

const URL ='https://api.github.com/users'

type UserType = {
    login: string
    location: string
    blog: string
    avatar_url: string
}



export default function FetchPage() {
    
    const [name, setName] = useState('Peetiphat1')
    const [data, setData] = useState({} as UserType)
    
    const fetchUser = async () => {
        const response = await fetch(`${URL}/${name}`)
        const data = await response.json()
        console.log("Response: ", data)
        setData(data)
    }

    useEffect( () => {
        console.log("use effcet")
        fetchUser()
    },[])



    return (
    <div>
            <h1>Fetch</h1>
            <div>
                <input
                    className='rounded border p-2 mr-2'
                    type="text" name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button
                    className='rounded border p-2 mb-2'
                    onClick={fetchUser}
                >Fetch</button>
            </div>
        <div className='flex border bg-amber-100 p-4 rounded-lg justify-between items-center w-auto'>
        {/* <div className='border m-2 p-2'>{JSON.stringify(data)}</div> */}
        
        <div className=''>
            login: {data.login}
        </div>
        <div className=''>
            location : {data.location}
        </div >
        <div className=''>
            blog : {data.blog}
        </div>

        
        <div>
            <Image loading="eager" className='rounded-full w-auto h-auto' src={data.avatar_url ?? '/meowl.jpeg'} width={100} height={100} alt='github image'/>
        </div>
    </div>
    </div>
  )
}
