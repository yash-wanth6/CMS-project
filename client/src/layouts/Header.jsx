import React from 'react'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Aboutpage from '..pages/Aboutpage'

export default function Header() {
    const paths = ['../pages/Signup','../pages/Signin','..pages/Aboutpage']
    const value = [<Signup></Signup>,<Signin></Signin>,<Aboutpage></Aboutpage>]
  return (
    <>
        <h1>Tracker</h1>
    </>
  )
}
