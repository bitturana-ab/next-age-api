"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputName, setInputName] = useState("");
  const { push } = useRouter();

  const submitBtnHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputName) push(`/guess/${inputName}`);
  };

  return (
    <div className=" bg-gray-800 p-30  items-center justify-center grid">
      <div className="py-3 px-2 ">
        <h1>Enter your name: </h1>
      </div>
      <form onSubmit={submitBtnHandler}>
        <input
          type="text"
          className="bg-gray-400 px-2.5 mr-2 py-1 rounded-2xl"
          placeholder="Enter name."
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <button
          className="bg-blue-400 px-2.5 py-1 text-black rounded-2xl"
          type="submit"
          // onClick={submitBtnHandler}
        >
          Guess age of {inputName}
        </button>
      </form>
    </div>
  );
}
