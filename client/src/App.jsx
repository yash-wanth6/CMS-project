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
import DashboardCharts from './dashboard/DashboardCharts'
import DashboardTracker from './dashboard/DashboardTracker'
import DashboardHeader from './layouts/DashboardHeader'

function App() {

  return (
    <div className="flex flex-col max-h-screen">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      {/* password evaluation */}
    </div>
  )
}

export default App
