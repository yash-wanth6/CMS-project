import { useState } from 'react'

import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './layouts/Header'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
