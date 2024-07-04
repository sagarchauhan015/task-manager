import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="w-3/4 ml-auto mr-auto flex justify-between font-sans items-center bg-black text-white p-4 px-6 rounded-xl font-medium">
            <Link className=" text-lg" href={'/'}>Task Manager</Link>
            <Link className="bg-white p-2 text-black rounded-lg" href={'/addTopic'}>Add Task</Link>
        </nav>
    )
}