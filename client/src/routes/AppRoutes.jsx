import React from 'react'
import { Route, Routes } from 'react-router'
import Header from '../layouts/Header'
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Aboutpage from '../pages/Aboutpage';
import Developer from '../pages/Developer'

export default function AppRoutes() {
    const paths = ['/','/home','/signin','/sign-up','/notfound','/about','/developer'];
    const values = [<Home></Home>,<Home></Home>,<Signin></Signin>,<Signup></Signup>,<NotFound></NotFound>,<Aboutpage></Aboutpage>,<Developer></Developer>]
  return (
    <Routes>
        <Route path='/' element={<Header></Header>}>
            {
                paths.map((value,index) => {
                    return(
                        <Route key={index} path={paths[index]} element={values[index]}></Route>
                    )
                })
            }
        </Route>
    </Routes>
  )
}
