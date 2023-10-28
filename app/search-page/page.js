"use client";
import React, { useEffect, useState } from "react";
import Ribbon from "@/components/ribbon";
import ExportNotion from "@/components/exportNotion";

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const handleSearch = async (e) => {
    console.log(search)
    setIsLoading(true)
    e.preventDefault();

    const emptyFields = search == '';

    if (emptyFields) {
        console.log("EMPTY SEARCH")
        setIsLoading(false)
        return;
    }
    fetch(`https://xrhdplg9s0.execute-api.us-west-2.amazonaws.com/Prod/search?q=${search}`, {
        method: 'POST'
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Invalid search Query");
    }
    }).then((out) => {
        console.log(out)
        setIsLoading(false)
        setData(out);
    })
  } 

  return (
    <main class="h-screen bg-gray-800">
        <Ribbon />
        <div class="flex mt-5 justify-center">
            <div class="flex flex-col bg-gray-700 rounded-lg w-70vw h-48 p-8 space-y-5">
                <p class="justify-self-center self-center font text-xl">Search your study topic!</p>
                <div class="flex justify-center mt-10 space-x-2">
                    <input
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-750 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button 
                        class="text-black bg-slate-200 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-200 dark:hover:bg-slate-300 dark:focus:ring-blue-800"
                        onClick={handleSearch}
                    >Search</button>
                    </div>
                    <div class="flex justify-center mt-5">
                    {isLoading ? (
                    <p>Loading...</p>
                    ) : (
                    <ExportNotion data={data}/>
                    )}
                </div>  
            </div>     
        </div>   
    </main>
  )
}