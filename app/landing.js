"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
    const router = useRouter();
    const handleRouting = (e) => {
        e.preventDefault();
        router.push('/search-page');
    }

    return (
        <main class="h-screen bg-gray-800">
            <div class="flex items-center pt-10vw ml-10 mr-10 space-x-14">
                <div class="flex flex-col grow space-y-5">
                    <div class="flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="158" height="144" viewBox="0 0 24 24"><path fill="red" d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"/></svg>
                        <p class="text-white font-serif font-bold text-8xl text-stroke">study.yt</p>
                    </div>
                    <p class="text-white font-serif font-bold text-5xl">Skip the lectures, learn the content</p>
                    <p class="text-white font-serif text-xl">Waste less time cramming lectures and tutorials before your exams and let study.yt summarize the content for you. Our AI will compile content from leading educators on Youtube and give you the information you need. Simply enter the topic and watch the magic happen!</p>
                </div>
                <div class="grow-0">
                    <button class="text-white text-3xl font-bold font-serif bg-gray-700 rounded-full w-25vw h-20" onClick={handleRouting}>Get Started</button>
                </div>
            </div>
        </main>
    )
}