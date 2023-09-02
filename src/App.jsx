// import React from "react";\
import "./App.css";
import Tiptap from "./components/Tiptap";

export default function App() {
  return (
    <>
      <div className=' min-h-screen text-zinc-900 bg-gradient-to-b from-sky-400 to-sky-200 p-8'>
        <div className='bg-white h-5/6 min-w-[700px]  mx-auto p-4 bg-red-950 rounded-xl min-h-[700px] shadow-lg border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr] '>
          <aside className='bg-red-50'>
            <div className='flex group gap-2 my-2 mx-2 hover:ease duration-1000 '>
              <button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-red-400'></button>
              <button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-yellow-400'></button>
              <button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-green-400'></button>
            </div>
          </aside>
          <main className='bg-white p-5 prose max-w-none prose-zinc'>
            <Tiptap />
          </main>
        </div>
      </div>
    </>
  );
}
