import {NavBar} from "@/layout";
import React, {FC} from "react";

export const Landing: FC = () => {
  return (
    <>
      <div className="relative min-h-screen bg-kid bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50" />

        <NavBar />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <h1 className="text-6xl font-bold">
            Happiness comes from your action.
          </h1>
          <p className="mb-8 mt-4">
            Be a part of the breakthrough and make someone's dream come true.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/login">
              <button className="rounded-md bg-blue-600 px-6 py-3 shadow-lg hover:bg-blue-700">
                Donate now
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley
             "
              target="_blank"
            >
              <button className="flex items-center rounded-md bg-white px-6 py-3 text-gray-800 shadow-lg hover:bg-gray-100">
                <PlayCircleIcon className="mr-2 h-6 w-6" />
                Watch video
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

function PlayCircleIcon({className}: {className: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}
