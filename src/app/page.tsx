"use client"
import { useEffect, useState } from "react";

export default function Home() {

  let [count, setCount] = useState(0)
  let [running, setRunning] = useState(false)
  useEffect(()=>{
    let timer:any
    if(running){
      timer = setInterval(()=>{
        setCount((prevCount)=>prevCount + 1);
      },100)
    }
    return()=>{
      clearInterval(timer)
    }
    
  },[running,count])

  const hadleStart = ()=>{
    setRunning(true)
  }
  const hadlePause = ()=>{
    setRunning(false)
  }
  const hadleEnd = ()=>{
    setRunning(false)
    setCount(0)
  }

  return (
    <div className="bg-slate-800 h-screen flex justify-center items-center">
      <div className="bg-slate-300 p-10 shadow-lg shadow-slate-700 flex flex-col gap-10 items-center rounded-lg">
        <h1 className="text-4xl font-bold">Counter App</h1>
        <p className="font-bold text-3xl">{count}</p>
        <div className="flex gap-4">
          <button onClick={hadleStart} className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-900">Start</button>
          <button onClick={hadlePause} className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-900">Pause</button>
          <button onClick={hadleEnd} className="bg-slate-700 text-white p-3 rounded-lg hover:bg-slate-900">End</button>
        </div>
      </div>
    </div>
  );
}
