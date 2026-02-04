import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Flight from './pages/Flight'
import Hotel from './pages/Hotel'
import CarHire from './pages/CarHire'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/flights' element={<Flight />} />
      <Route path='/hotels' element={<Hotel />} />
      <Route path='/carhire' element={<CarHire />} />
    </Routes>
  )
}

export default App
