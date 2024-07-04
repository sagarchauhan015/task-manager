
import Link from "next/link"
import DeleteBtn from "./DeleteBtn"

const getTopics = async () => {
    try {
      const res = await fetch(process.env.DEV_URI, {
        cache: "no-store",
      })
      if (!res.ok) {
        throw new Error("Failed to fetch topics")
      }
      return res.json()
    } catch (error) {
      console.log("Error loding topics: ", error)
    }
  }


export default async function TopicsList() {
  const { topics } = await getTopics()
  return (
    <>
      {topics.map((t) => (
        <div className="w-3/4 ml-auto mr-auto my-4 px-6 flex  justify-between p-4 rounded-xl border-b-slate-950 font-sans border border-black">
          <div className="w-3/4">
            <h2 className=" text-2xl font-medium">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex w-1/4 justify-end ">
            <DeleteBtn id={t._id}/>
            <Link
              className="  bg-green-600 h-10 px-4 p-2 rounded-lg text-slate-50 font-medium"
              href={`/editTopic/${t._id}`}
            >
              Edit
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
