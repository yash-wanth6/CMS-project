import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Developer from './pages/Developer'
import Basiclayout from './layouts/Basiclayout'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import DashboardTracker from './dashboard/DashboardTracker'
import DashboardHome from './dashboard/DashboardHome'

function App() {

  return (
     <div className="flex flex-col max-h-screen">
      {/* <AuthProvider> */}
        {/* <AppRoutes /> */}
      {/* </AuthProvider> */}
      {/* <DashboardTracker /> */}
      <DashboardHome />
      </div>
  )
}

export default App
