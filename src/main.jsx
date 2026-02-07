import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FlightContextProvider from './context/FlightsContext.jsx'
import CombineNavbar from './components/Navbar/CombineNavbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from './components/Login/Login.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FlightContextProvider>
      <CombineNavbar />
      <Login />
      <App />
      <Footer />
    </FlightContextProvider>
  </BrowserRouter>,
)
