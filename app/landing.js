"use client";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Landing() {
  const { user } = useUser();
  const router = useRouter();

  // If the user is authenticated, redirect to the search-page
  if (user) {
    router.push('/search-page');
  }

  return (
    <main className="h-screen bg-neutral-50 text-zinc-800 flex items-center justify-center bg-cover bg-center">
      <div className="flex items-center h-full max-w-screen-xl mx-auto px-8">
        <div className="flex-grow space-y-5">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="158"
              height="144"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z"
              />
            </svg>
            <p className=" font-bold text-8xl">learn stream</p>
          </div>
          <p className=" font-bold text-5xl">Skip the lectures, learn the content</p>
          <p className=" text-xl">
            Waste less time cramming lectures and tutorials before your exams and let <b>learn stream</b> summarize the content for you. Our AI will compile content from leading educators on Youtube and give you the information you need. Simply enter the topic and watch the magic happen!
          </p>
        </div>
        <div className="flex-shrink-0">
            <Link href="/api/auth/login">
                <button className="font-bold  bg-gradient-to-r from-gray-800 to-gray-700 text-white text-3xl rounded-full w-60 h-16 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transform hover:scale-105 transition-transform">
                Get Started
                </button>
            </Link>
        </div>
      </div>
    </main>
  );
}
