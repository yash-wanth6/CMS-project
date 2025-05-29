import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Developer from './pages/Developer'
import Header from './layouts/Header'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      {/* <Signup></Signup> */}
      {/* <Home></Home> */}
      {/* <NotFound></NotFound> */}
       <Signin></Signin>
       <Developer></Developer>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
      </BrowserRouter>
    </>
  )
}

export default App
