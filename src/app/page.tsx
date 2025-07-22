"use client"

import { useState ,FormEvent} from "react";
export default function Home() {

  const [inputName,setInputName] = useState("");

  const submitBtnHandler = (e:FormEvent)=>{
    e.preventDefault();
    
  }

  return (
    <div className="p-30">
      <div>
        <h1>Enter your name: </h1>
      </div>
      <form onSubmit={submitBtnHandler}>
        <input 
        type="text" 
        placeholder="Enter name."
        value={inputName}
        onChange={(e)=>setInputName(e.target.value)}
        />
        <button 
        type="submit"
        // onClick={submitBtnHandler}
        >Guess age of {inputName}</button>
      </form>
    </div>
  );
}
