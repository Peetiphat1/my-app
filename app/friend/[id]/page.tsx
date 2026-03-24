'use client'

import { useActionState, useEffect, useState } from "react"
import { FriendType, URL } from "../constant"
import { updateFriendList } from "../action"
import { useRouter } from "next/navigation"

export default function EditFriend({ params }:{ params: Promise<{id: string}>}) {

    const [id, setId] = useState("")
    const [friend, setFriend] = useState<FriendType>({ id: "", name: "", birth: "" })
    const [state, action] = useActionState(updateFriendList,{
        success: false,
        errors :{
            name: {errors: []},
            birth: {errors: []},
        }
    })
    const router = useRouter()
    
    useEffect(() => {
        if (state.success) {
            router.push('/friend')
        }
    }, [state.success, router])
    
    useEffect(() => {
        const fetchFriend = async () => {
            try {
                const {id} = (await params)
                setId(id)
                const response = await fetch(`${URL}/${id}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const friend = await response.json()
                console.log("friend: ", friend)
                setFriend(friend)
            } catch (error) {
                console.error("Error fetching friend:", error)
                // Optionally set an error state or show a message
            }
        }
        fetchFriend()

    }, [])

       return <div className="bg-white text-black p-4"> ID: {id}
        <h1>Edit friend</h1>
        <div>
            <form action={action}>
                <input
                    className="border p-2 my-2 text-black"
                    type="text" name="name" defaultValue={friend.name} />
                {(state?.errors && <p className="text-red-500">{state.errors.name?.errors[0]}</p>)}
                <input className="border p-2 my-2 text-black"
                    type="text" name="birth" defaultValue={friend.birth} />
                {(state?.errors && <p className="text-red-500">{state.errors.birth?.errors[0]}</p>)}
                <input type="hidden" name="id" value={friend.id} />
                <button className="border p-2 my-2 text-black"
                    type="submit">Update</button>
            </form>
        </div>
        </div>
}
