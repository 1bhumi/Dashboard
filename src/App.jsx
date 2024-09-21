
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Calender from './pages/Calender'
import Weather from './pages/Weather'
import News from './pages/News'
import Togglemode from "../src/Components/Togglemode"
import TaskManager from './pages/TaskManager'
import { FaRegUser } from "react-icons/fa";

function App() {
 

  return (
    <div >
      <div className="navbar">
      <FaRegUser className='icon'/>
      <NavLink className ="a" to="/">Dashboard</NavLink>
      <NavLink className ="a" to="/Weather">Weather</NavLink>
      <NavLink className ="a" to="/Calender">Calender</NavLink>
      <NavLink className ="a" to="/News">News</NavLink>
      <NavLink className ="a" to="/TaskManager">TaskManager</NavLink>
      </div>

      

      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/Weather" element={<Weather></Weather>}></Route>
        <Route path="/Calender" element={<Calender></Calender>}></Route>
        <Route path="/News" element={<News></News>}></Route>
        <Route path="/TaskManager" element={<TaskManager></TaskManager>}></Route>
      </Routes>

      <Togglemode></Togglemode>

    </div>
  )
}

export default App
