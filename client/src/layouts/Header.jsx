import React from 'react'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Aboutpage from '../pages/Aboutpage'
import {Link , Outlet} from 'react-router-dom'

export default function Header() {
    const paths = ['/signup', '/signin', '/aboutpage']
    const value = ["Sign-up","Sign-in","About"]
    return (
        <>
            <h1>Tracker</h1>
            <ul>
                {
                    paths.map((value, index) => {
                        return (<li key={index}><Link to={paths[index]}>{value[index]}</Link></li>)
                    })
                }
            </ul>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}
