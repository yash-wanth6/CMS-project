import React from 'react'

export default function DashboardHome() {
  return (
    <div className="flex flex-col p-4 h-screen space-y-4 justify-center">

      <div className="bg-white text-gray-800 p-6 rounded border border-black shadow flex items-start justify-start text-3xl font-bold w-full md:w-auto">
        <i className="fas fa-sticky-note mr-2"></i> NOTES
      </div>

      <div className="bg-white text-gray-800 p-6 rounded border border-black shadow flex items-start justify-start text-3xl font-bold w-full md:w-auto">
        <i className="fas fa-tasks mr-2"></i> PROGRESS
      </div>

      <div className="bg-white text-gray-800 p-6 rounded border border-black shadow flex items-start justify-start text-3xl font-bold w-full md:w-auto">
        <i className="fas fa-code mr-2"></i> DEVELOPER PAGE
      </div>

      <div className="bg-white text-gray-800 p-6 rounded border border-black shadow flex items-start justify-start text-3xl font-bold w-full md:w-auto">
        <i className="fas fa-info-circle mr-2"></i> ABOUT PAGE
      </div>
    </div>
  );
}
