import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

export default function DashboardHome() {
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  const cardClasses =
    "rounded-2xl border p-6 shadow-sm bg-white text-black transition-all duration-200 hover:shadow-lg hover:-translate-y-1";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 min-h-screen">
      <div className={cardClasses + " border-gray-200"}
          onClick={()=> navigate('/dashboard/tracker')}>
        <h3 className="text-lg font-semibold">Progress</h3>
        <p className="text-sm text-gray-500">Track your progress here.</p>
        <span className="pt-6 mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" ><i className="fa-solid fa-chart-simple"></i></span>
      </div>

      <div className={cardClasses + " border-gray-200"}
          onClick={()=> navigate('/dashboard/charts')}>
        <h3 className="text-lg font-semibold">Progress Tracker</h3>
        <p className="text-sm text-gray-500">Visualize your performance over time.</p>
        <span className="pt-6 mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" ><i className="fa-solid fa-bars-progress"></i></span>
      </div>

      <div className={cardClasses + " border-gray-200"} onClick={()=> navigate('/dashboard/notes')}>
        <h3 className="text-lg font-semibold">Notes</h3>
        <p className="text-sm text-gray-500">Keep your notes organized.</p>
        <span className="mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" >
        <img className="w-48 h-48  " src="https://static.vecteezy.com/system/resources/previews/027/134/050/original/notepad-icon-vector.jpg" alt="Notes"/>
        </span>
      </div>

      <div className={cardClasses + " border-gray-200"}
          onClick={()=> navigate('/dashboard/changepassword')}>
        <h3 className="text-lg font-semibold">Change Password</h3>
        <p className="text-sm text-gray-500">Update your account security.</p>
        <span className="pt-6 pb-6 mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" >
          <i className="fa-solid fa-key"></i>
        </span>
      </div>

      <div className={cardClasses + " border-gray-200"} onClick={() => navigate('/dashboard/changeemail')}>
        <h3 className="text-lg font-semibold">Change Email</h3>
        <p className="text-sm text-gray-500">Modify your contact email.</p>
        <span className="pt-6 mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" >
          <i className="fa-solid fa-envelope"></i>
        </span>
      </div>

      <div className={cardClasses + " border-gray-200"}
          onClick={()=> navigate('/developer')}>
        <h3 className="text-lg font-semibold">Developers</h3>
        <p className="text-sm text-gray-500">Tools and API documentation.</p>
        <span className="mt-4 text-8xl col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center" >
          <img className="w-48 h-48" src="https://static.vecteezy.com/system/resources/previews/002/206/015/original/developer-working-icon-free-vector.jpg" alt="developer" />
        </span>
      
      </div>

      <div className="col-span-1 sm:col-span-2 md:col-span-3 flex justify-center items-center">
        <Link to="/">
          <button className="mt-2 px-5 py-2.5 bg-black text-white rounded-xl transition-all duration-200 hover:bg-gray-800 hover:scale-105"
                  onClick={() => setIsAuth(false)}>
            Log out
          </button>
        </Link>
      </div>
    </div>
  );
}
