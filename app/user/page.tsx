'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Userpage() {


  const [form, setFrom] = useState({
    name: "jim",
    age: 33,
  })

  const [users, setUsers] = useState([
    { id: 1, name: "Peetiphat", age: 19 },
    { id: 2, name: "Warodom Werapu", age: 40 },
    { id: 3, name: "Nathakan dacoai", age: 22 },
  ])

  const [editId, serEditId] = useState(-1)

  const saveUser = (e: FormEvent) => {
    e.preventDefault()

    if (editId === -1) {
      setUsers([...users, {
        id: (users.length === 0) ? 1 : users[users.length - 1].id + 1,
        name: form.name,
        age: form.age
      }])
    } else {
      const tmpForm = {
        id: users[editId].id,
        name: form.name,
        age: form.age,
      }

      const tmpUsers = users.map((users, index) => (index === editId) ? tmpForm : users)
      setUsers([...tmpUsers])
      setFrom({
        name: "jim",
        age: 0
      })

    }
  }

  const addUser = (e: FormEvent) => {
    e.preventDefault()
    console.log("Add User")
    setUsers([...users, {
      id: (users.length === 0) ? 1 : users[users.length - 1].id + 1,
      name: form.name,
      age: form.age
    }])
  }

  const deleteUser = (id: number) => {
    const tmpUsers = users.filter((item) => (item.id !== id))
    //console.log(tmpUsers)
    setUsers([...tmpUsers])
  }

  const editUsers = (index: number) => {
    setFrom(users[index])
    setEditId(index)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log("Name: ", name, "value: ", value)

    setFrom(prev => ({
      ...prev,
      [name]: value
    }))

  }



  return (
    <div><h1 className='text-3xl'>UserPage</h1>
      <form action=""
        className="border p-4 mb-8 m-3" >

        <div>
          <input
            className="border p-2 text-sm text-zinc-400 mb-2 w-full"
            type="text" name="name" placeholder="name" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <input
            className="border p-2 text-sm text-zinc-400 mb-2 w-full"
            type="text" name="age" placeholder="age" value={form.age} onChange={handleChange} />
        </div>
        <div>
          <button
            onClick={addUser}
            className="border p-2 rounded-lg mb-2"
          >Add</button>
        </div>
      </form>

      <div className='border p-2 flex  flex-wrap gap-4 rounded-lg justify-center '>
        {
          users.map((item, index) => <div key={index}>
            <div className='border px-4 py-2 m-2 rounded-lg flex justify-between items-center min-w-64 bg-amber-200 shadow-lg'>
              <div className=''>
              ID : {item.id}
            </div>
            <div>
              Name : {item.name}
              </div>
            <div>
              Age :  {item.age}
              </div>
           <div className='flex flex-col ml-8'>
            <button
              onClick={() => editUsers(index)}
              className="border p-1 rounded-lg ml-2 m-1 bg-green-700"
            >Edit</button>
            <button
              onClick={() => deleteUser(item.id)}
              className="border p-1 rounded-lg ml-2 bg-red-700"
            >X</button>

            </div>
          </div> </div>)}

      </div>
    </div>

  )
}
