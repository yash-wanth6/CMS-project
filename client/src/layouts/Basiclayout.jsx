import React from 'react'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Aboutpage from '../pages/Aboutpage'
import {Link , Outlet} from 'react-router-dom'

export default function Header() {
    const paths = ['/signup', '/signin', '/about'];
    const labels = ["Sign-up", "Sign-in", "About"];
    return (
        <>
            <header className="bg-white bg-opacity-30 backdrop-blur-md text-gray-700 px-4 py-2 shadow-md flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800"><Link to={'/'}>Yup !</Link></h1>
                <nav>
                    <ul className="flex space-x-6">
                        {paths.map((path, index) => (
                            <li key={index}>
                                <Link
                                    to={path}
                                    className="hover:underline hover:text-gray-600 transition-colors text-gray-700"
                                >
                                    {labels[index]}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main className="px-0 py-4">
                <Outlet />
            </main>
            <footer className="bg-gray-800 text-white text-center py-4 mt-8 shadow-inner">
                <h1 className="text-sm font-medium"> © {new Date().getFullYear()} Yup ! All rights reserved.</h1>
            </footer>
        </>
    );
}
