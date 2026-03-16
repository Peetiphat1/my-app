'use client'


import { ChangeEvent, FormEvent, useState } from "react"


type UserType = { id: number, task: string, time: number, isdone: boolean }


type UserDetailProps = UserType & {
 index: number
 deleteUser: (index: number) => void
 editUser: (index: number) => void
}


export default function UserPage() {


 const [todo, setUsers] = useState<UserType[]>([
   {id: 1, task: "Play pingpong", time: 30, isdone: false},
    {id: 2, task: "Swiming at pool", time: 60, isdone: true},
    {id: 3, task: "Write this easy homework", time: 130, isdone: false},
 ])


 const [form, setForm] = useState<UserType>({
   id: 0,
   task: '',
   time: 0,
   isdone: false,
 })


 const [editId, setEditId] = useState(-1)


 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   const { name, value,checked } = e.target
   console.log("Name: ", name, "Value: ", value, "Length: ", todo.length)


   setForm(prev => ({
     ...prev,
     [name]: value, isdone: checked }))
 }


 const handleSubmit = (e: FormEvent) => {
   e.preventDefault()
   if (editId === -1) {
     setUsers([...todo,
     { ...form, id: (todo.length !== 0) ? todo[todo.length - 1].id + 1 : 1 }
     ])
   }
   else {
     const tmpUsers = todo.map((user, index) => (index === editId) ? form : user)
     setUsers([...tmpUsers])
     // setUsers( prev => prev.map((user, index) => (index === editId) ? form : user))


     setForm({
       id: 0,
       task: '',
       time: 0,
       isdone: false,
     })
     setEditId(-1)
   }
   console.log(todo)
 }


 const deleteUser = (index: number) => {
   const tmpUsers = todo.filter((_, i) => i !== index)
   setUsers([...tmpUsers])
   // setUsers(prev =>
   //   prev.filter((_, i) => i !== index)
   // )
 }


 const editUser = (index: number) => {
   setForm(todo[index])
   setEditId(index)
 }


 return (<div>
   {/* {JSON.stringify(users)} */}


   <ul className="flex gap-2 flex-wrap text-black">
     {todo?.map((Task, index) =>
       <li key={index}>
         <UserDetail
           id={Task.id}
           task={Task.task}
           time={Task.time}
           isdone={Task.isdone}
           index={index}
           deleteUser={deleteUser}
           editUser={editUser}
         />
       </li>)
     }
   </ul>


   <form action="#"
     className="border-2 p-3 m-2 w-fit rounded-3xl text-black bg-orange-300"
     onSubmit={handleSubmit}
   >
     <div>
       <label htmlFor="task">Task: </label>
     </div>
     <div>
       <input
         className="border-2 p-2 bg-white"
         type="text" name="task" placeholder="Play pingpong"
         onChange={handleChange}
         value={form.task}
       />
     </div>
     <div>
       <label htmlFor="time">Time: </label>
     </div>
     <div>
       <input
         className="border-2 p-2 bg-white"
         type="number" name="time" placeholder="30"
         onChange={handleChange}
         value={form.time}
       />
     </div>
     <div>
       <label htmlFor="isdone">isDone: </label>
     </div>
     <div>
       <input
         className="border-2 p-2 "
         type="checkbox" name="isdone" placeholder="false"
         onChange={handleChange}
         value={String(form.isdone)}
       />
     </div>
     <div>
       <button className="border-2 p-2 mt-2 rounded-2xl text-black bg-green-300 ">
         {(editId === -1) ? "Add" : "Update"}
       </button>
     </div>
   </form>
 </div>)
}


function UserDetail({ id, task: task, time: time, isdone: isdone, index, deleteUser, editUser }: UserDetailProps) {
 return <div className="border-2 rounded-3xl border-amber-900 m-4 p-4 pb-2 gap-8 max-w-72 relative text-black bg-amber-200  ">
   <div className="text-3xl mb-1 ">ID: {id}</div>
   <div>task: {task}</div>
   <div>time: {time}</div>
   <div>isDone: {isdone ? "Yes" : "No"}</div>
   <button
     className="absolute top-[-4] right-0 px-2  border-2 rounded-xl bg-red-400 text-black m-3 mt-4"
     onClick={() => deleteUser(index!)}
   >
     x
   </button>
   <button
     className="border-2 rounded-md bg-green-100 mt-2 px-2 text-black"
     onClick={() => editUser(index)}
   >Edit</button>
 </div>
}
