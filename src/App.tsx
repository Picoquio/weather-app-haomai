// import { useState } from 'react'

import { Navigate, Route, Routes } from "react-router-dom"
import { FormPage } from "./Pages/FormPage"
import { WeatherPage } from "./Pages/WeatherPage"
import { Navbar } from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-300">
        <Navbar/>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="weather-details" element={<WeatherPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default App
