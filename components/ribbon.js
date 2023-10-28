"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Ribbon() {
    const router = useRouter();
    const handleRouting = (e) => {
        e.preventDefault();
        router.push('/');
    }

    return (
        <div class="flex justify-between items-center mr-8">
            <div class="flex items-center space-x-4">
                <svg class="ml-5" xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 24 24"><path fill="red" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/></svg>
                <p class="text-white font-serif font-bold text-6xl text-stroke">study.yt</p>
            </div>
            <button class="text-white font-serif" onClick={handleRouting}>Log Out</button>
        </div>
    )
}