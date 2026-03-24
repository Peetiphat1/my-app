import z from "zod"

export const URL = 'http://localhost:4001/friend'

export type FriendType ={
    id: string,
    name?: string,
    birth?: string
}

export const FriendSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).max(50, { message: "Name is too long" }),
    birth: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, "กรุณาใส่รูปแบบ DD-MM-YYYY")
})