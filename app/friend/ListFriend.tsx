'use client'

import { useActionState } from "react";
import { FriendType } from "./constant";
import { addFriend, deleteFriend } from "./action";
import Friend from "./page";
import Link from "next/link";

export default function ListFriend({data}: {data: FriendType[]}) {
    const [state, action, isPending] = useActionState(addFriend,{
        errors:{
            name: {errors: []},
            birth: {errors: []},
        }
        
    })

    return <div className="bg-black text-white"><h1 className="font-xl font-bold my-4">Friend</h1>
        <hr />
        <form action={action}>
            <h1 className="font-xl my-2">Add Friend</h1>
            <div>
                <input className="border p-2 rounded" type="text" maxLength={50} name="name" placeholder="name" />
                {(state?.errors && <p className="text-red-500  ">{state.errors.name?.errors[0]}</p>)}
            </div>
            <div>
                <input className="border p-2 my-2 rounded" type="text" name="birth" placeholder="birth" />
                {(state?.errors && <p className="text-red-500">{state.errors.birth?.errors[0]}</p>) }
            </div>
            <div>
                <button className="border p-2 my-2 rounded" 
                    disabled={isPending}
                    type="submit">
                    {isPending?"Add...":"Add"}
                    </button>
            </div>
        </form>

        <hr />


        <div>
            {
                data.map((item, index) => <div key={index}>
                    {item.id} : {item.name} : {item.birth}
                    <button className="border px-2 m-2"
                        onClick={ () => deleteFriend(item.id)}
                        >
                        x
                    </button>
                    <Link className="border px-2 m-2"
                        href={`/friend/${item.id}`}
                        >
                        Edit
                    </Link>
                </div>)
            }
        </div></div>
}