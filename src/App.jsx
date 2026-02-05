import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Flight = lazy(() => import('./pages/Flight'))
const CarHire = lazy(() => import('./pages/CarHire'))
const Hotel = lazy(() => import('./pages/Hotel'))

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
