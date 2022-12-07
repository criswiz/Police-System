import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Complaints from './pages/Complaints'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from './pages/AdminLogin'
import AdminPage from './pages/AdminPage'
import Suspect from './pages/Suspect'
import Citizen from './pages/Citizen'
import NewsFeed from './pages/NewsFeed'
import Supervisor from './pages/Supervisor'
import SupervisorLogin from './pages/SupervisorLogin'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Navbar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/complaint' element={<Complaints />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path='/suspect' element={<Suspect />} />
            <Route path='/citizen' element={<Citizen />} />
            <Route path='/newsfeed' element={<NewsFeed />} />
            <Route path='/supervisor' element={<Supervisor />} />
            <Route path='/supervisorlogin' element={<SupervisorLogin />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
