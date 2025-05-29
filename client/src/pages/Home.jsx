import React from 'react'

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Application</h1>
      <div className="space-x-4">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
          Sign-in
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
          Sign-up
        </button>
      </div>
    </div>
  )

}
