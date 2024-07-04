'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function EditTopicForm({id, title, description}){
    const [newTitle, setNewTitle] = useState(title)
    const [newDescription, setNewDescription] = useState(description)
    const router = useRouter()
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await fetch(`api/topics/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({newTitle, newDescription})
        })
        if(! res.ok){
          throw new Error("Cannot update the data")
        }
        router.push("/")
        router.refresh()
      } catch (error) {
        console.log(error)
      }
    }
    return(
    <form onSubmit={handleSubmit} className="w-3/4 ml-auto mr-auto flex flex-col mt-2 py-4 gap-4 font-sans">
      <input
        className="border border-black p-2 rounded-xl"
        type="text"
        placeholder="Topic Title"
        onChange={(e)=>setNewTitle(e.target.value)}
        value={newTitle}
      ></input>
      <input
        className="border border-black p-2 rounded-xl "
        type="text"
        placeholder="Topic Description"
        onChange={(e)=>setNewDescription(e.target.value)}
        value={newDescription}
      ></input>
      <button type="submit" className="bg-green-600 text-white  w-full p-3 rounded-xl ml-auto mr-auto">
        Apply Changes
      </button>
    </form>
    )
}