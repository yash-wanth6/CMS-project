import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function DashboardHeader() {
  return (
    <header className="bg-white bg-opacity-30 backdrop-blur-md text-gray-700 px-4 py-2 shadow-md flex-col items-center justify-between">
      <h1 className="text-3xl font-bold text-gray-800"><Link to={'/dashboard/home'}>Yup !</Link></h1>
      <main className="px-0 py-4">
        <Outlet />
      </main>
    </header> 
  )
}
