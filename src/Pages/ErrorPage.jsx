import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-center px-6">
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold text-indigo-600 drop-shadow-lg">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-3 max-w-md">
        The page you're looking for doesn't exist or may have been moved.  
        Don't worry — let's get you back on track.
      </p>

      <button
        onClick={() => navigate('/')}
        className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
      >
        ⬅ Go Back Home
      </button>

      <div className="mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 184 152"
          className="w-64 opacity-80"
        >
          <circle cx="92" cy="76" r="70" fill="#E0E7FF" />
          <path
            fill="#6366F1"
            d="M52 60h10v32H52zm70 0h10v32h-10zM76 60h32v10H76zM76 82h32v10H76z"
          />
        </svg>
      </div>
    </div>
  )
}

export default ErrorPage
