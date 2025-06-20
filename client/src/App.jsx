import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin'
import Developer from './pages/Developer'
import Basiclayout from './layouts/Basiclayout'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import DashboardCharts from './dashboard/DashboardCharts'
import DashboardTracker from './dashboard/DashboardTracker'
import DashboardHeader from './layouts/DashboardHeader'

function App() {

  return (
    <div className="flex flex-col max-h-screen">
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
