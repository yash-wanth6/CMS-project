import React from 'react';

export default function DashboardNotes() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 text-white">
      <form className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Hai! Welcome. Take your Notes
        </h1>

        {/* Title Field */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-base font-medium text-white mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter note title"
          />
        </div>

        {/* Note Field */}
        <div className="mb-6">
          <label
            htmlFor="note"
            className="block text-base font-medium text-white mb-1"
          >
            Note
          </label>
          <textarea
            id="note"
            name="note"
            rows="5"
            className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your note here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
