import { Navigate, Route, Routes } from "react-router-dom";
import { FormPage } from "./Pages/FormPage";
import { WeatherPage } from "./Pages/WeatherPage";
import { Navbar } from "./components/Navbar";
import { WeatherProvider } from './context/WeatherProvider';

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-r from-red-200 to-blue-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="weather-details" element={<WeatherPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </WeatherProvider>
  )
}

export default App
