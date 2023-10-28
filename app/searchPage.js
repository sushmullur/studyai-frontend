"use client";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const handleSearch = async (e) => {
    console.log(search)
    e.preventDefault();

    const emptyFields = search == '';

    if (emptyFields) {
        return;
    }
    fetch('https://xrhdplg9s0.execute-api.us-west-2.amazonaws.com/Prod/search?q=${search}', {
        method: 'POST'
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Invalid search Query");
    }
    }).then((out) => {
        console.log(out)
    })
  } 

  return (
    <main style={{
        backgroundColor: 'white' ,
        height: '100vw',
        padding: '20vw'
        }}>
      <div>
        <input
          type="text"
          style={{
            color: 'black',
            border: '1px solid black',
            width: '30vw'
            }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          style={{
            backgroundColor: 'blue',
            color: 'white'
          }}
          onClick={handleSearch}
        >Search</button>
      </div>
    </main>
  )
}