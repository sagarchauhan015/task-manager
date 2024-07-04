"use client"

import { useState } from "react"
import {useRouter} from "next/navigation"


export default function AddTopic() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()
  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!title || !description){
        alert("Title and description are required.")
        return
      }

      try {
        const res = await fetch("api/topics",{
          method: "POST",
          headers: {
            "Content-type" : "application/json",
          },
          body: JSON.stringify({title, description})
        })
        if(res.ok){
          router.push('/')
          router.refresh()
        }
        else{
          throw new Error("Failed to create new topic")
        }
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <form onSubmit={handleSubmit} className="w-3/4 ml-auto mr-auto flex flex-col mt-2 py-4 gap-4  font-sans">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-black p-2 rounded-xl"
        type="text"
        placeholder="Task Title"
      ></input>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-black p-2 rounded-xl "
        type="text"
        placeholder="Task Description"
      ></input>
      <button type="submit" className="bg-black text-white  w-full p-3 rounded-xl ml-auto mr-auto">
        Add Task
      </button>
    </form>
  )
}
