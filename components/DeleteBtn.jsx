"use client"
import { useRouter } from "next/navigation"
export default function DeleteBtn({ id }) {
    const router = useRouter()
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?")
    if (confirmed) {
      const res = await fetch(`api/topics?id=${id}`, {
        method: "DELETE",
      })
      if(res.ok){
        router.refresh();
      }
      
    }
  }

  return (
    <button
      className="  bg-red-500  h-10 px-4  p-2 rounded-lg text-slate-50 font-medium mr-2"
      onClick={removeTopic}
    >
      Delete
    </button>
  )
}
