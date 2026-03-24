"use server"

import z from "zod"
import { FriendSchema,URL } from "./constant"
import { fr } from "zod/locales"
import { revalidatePath } from "next/cache"

export async function updateFriendList(prevState:unknown, formData: FormData) {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const birth = formData.get('birth') as string

    const data = { id, name, birth }
    console.log(data)

    const result = FriendSchema.safeParse(data)
    if (!result.success) {
        console.log("TreeifyError: ",z.treeifyError(result.error).properties)
        return{success: false, errors: z.treeifyError(result.error).properties}

    }

    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "PUT", //same as PATCH
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        revalidatePath("/friend")
        return {success: true}
    } catch (error) {
        console.log("Error: " + error)
        return {success: false, errors: {name: {errors: ['Update failed']}, birth: {errors: []}}}
    }
    
}

export async function deleteFriend(id: string) {
    console.log("Id",id)

    await fetch(`${URL}/${id}`, {
        method: "DELETE",
    })
    revalidatePath("/friend")
     
}
export async function addFriend(prevState:unknown, formData: FormData) {
    const name = formData.get('name') as string
    const birth = formData.get('birth') as string
    console.log(name, birth)

    const result = FriendSchema.safeParse({name,birth})

    if (!result.success) {
        console.log("TreeifyError: ",z.treeifyError(result.error).properties)
        return { errors: z.treeifyError(result.error).properties }
    }

    await fetch(URL, {
        method: "POST",
        body: JSON.stringify({name,birth})
    })
        
    revalidatePath("/friend")
}