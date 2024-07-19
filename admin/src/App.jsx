import React from 'react'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Dashboard from './components/Dashboard'
import Map from './components/Map'
import Charts from './components/Charts'
import Logout from './components/Logout'
import Calendar from './components/Calendar'
import Table from './components/Table'



function App() {
  return (
    <Router>
      <div className="App flex">
        <Navigation />
        <div className="w-4/5">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/map' element={<Map />} />
            <Route path='/Charts' element={<Charts />} />
            <Route path='/Table' element={<Table />} />
            <Route path='/Calendar' element={<Calendar />} />
            <Route path='/logout' element={<Logout />} />
            

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
