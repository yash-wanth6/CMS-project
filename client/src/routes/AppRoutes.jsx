import React from 'react'
import { Route, Routes } from 'react-router'
import Header from '../layouts/Basiclayout'
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';
import Aboutpage from '../pages/Aboutpage';
import Developer from '../pages/Developer'
import DashboardHome from '../dashboard/DashboardHome';
import DashboardTracker from '../dashboard/DashboardTracker';
import DashboardCharts from '../dashboard/DashboardCharts';
import DashboardHeader from '../layouts/DashboardHeader';
import DashboardNotes from '../dashboard/DashboardNotes';
import DashboardChangeEmail from '../dashboard/DashboardChangeEmail';

export default function AppRoutes() {

    const paths = ['/','/signin','/signup','/notfound','/about','/developer'];
    const values = [<Home/>,<Signin/>,<Signup/>,<NotFound/>,<Aboutpage/>,<Developer/>];
    const dashboardPaths = ['/dashboard/home','/dashboard/tracker','/dashboard/charts','/dashboard/notes','/dashboard/changeemail'];
    const dashboardValues = [<DashboardHome/>,<DashboardTracker/>,<DashboardCharts/>,<DashboardNotes/>,<DashboardChangeEmail/>]
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
        <Route path='/dashboard' element={<DashboardHeader/>}>
            {
                dashboardPaths.map((value,index) => {
                    return(
                        <Route key={index} path={dashboardPaths[index]} element={dashboardValues[index]}/>
                    )
                })
            }
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}
