"use client";
import React, { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Ribbon from "@/components/ribbon";
import ExportNotion from "@/components/exportNotion";
import SQLTable from "@/components/table";

export default function SearchPage() {

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [dbdata, setDbdata] = useState();

  useEffect(() => {
    // Fetch data and update dbdata
    async function fetchDataFromApi() {
      try {
        const response = await fetch('/api/db');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const sqldata = await response.json();
        setDbdata(sqldata);
        console.log('dbdata:', dbdata); // This will log the updated dbdata
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchDataFromApi();
  }, [data]);

  const { user } = useUser();
  if (!user) { 
    return (
      <>
        <p>Unauthorized</p>
      </>
    )
  }
  
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
    <main className="h-screen bg-neutral-50 text-white">
        <Ribbon />
        <div className="flex flex-col mt-5 items-center space-y-5">
            <div className="flex flex-col bg-zinc-400 rounded-lg w-70vw h-48 p-8 space-y-5 shadow-lg">
                <p className="justify-self-center self-center text-black  text-xl">Search your study topic, {user.name}!</p>
                <div className="flex justify-center mt-10 space-x-2">
                    <input
                        type="text"
                        className="border border-gray-600 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button 
                        className="text-black bg-zinc-500 hover:bg-zinc-300 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-zinc-500 dark:hover:bg-zinc-300"
                        onClick={handleSearch}
                    >Search</button>
                    </div>
                    <div className="flex justify-center mt-5">
                    {isLoading ? (
                    <p className="text-black">Loading...</p>
                    ) : (
                      <></>
                    )}
                </div>  
            </div>     
            <SQLTable data={dbdata} />
        </div>   
    </main>
  )
}