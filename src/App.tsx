import { Navigate, Route, Routes } from "react-router-dom";
import { FormPage } from "./Pages/FormPage";
import { WeatherDetailsPage } from "./Pages/WeatherDetailsPage";
import { Navbar } from "./components/Navbar";
import { WeatherProvider } from './context/WeatherProvider';

function App() {
  return (
    //El context engloba todo lo que está contenido por la tag WeatherProvider
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-r from-red-200 to-blue-300">
        <Navbar />
        {/* Implementamos sistema de rutas, sin afectar al navbar. */}
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="weather-details" element={<WeatherDetailsPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </WeatherProvider>
  )
}

export default App
