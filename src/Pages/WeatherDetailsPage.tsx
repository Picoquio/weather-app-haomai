import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";

enum WeatherThemes {
  RAIN = 'rain',
  CLEAR = 'clear',
  CLOUDY = 'cloudy',
  SNOW = 'snow'
}


/**
 * Página que muestra los detalles del clima según la latitud y longitud especificadas.
 */
export const WeatherDetailsPage = () => {

  //Uso del context para recibir datos del clima
  const { weather } = useContext(WeatherContext);

  //Navegación programática provista por React Router
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  }

  //Estado del theme a utilizar
  const [theme, setTheme] = useState<WeatherThemes | null>(null);

  /**
   * Si no hay información del clima en el Context, navegamos de vuelta al home. Caso contrario, se asigna un theme.
   */
  const handleInit = (): void => {
    if (weather == null) {
      navigateHome();
    } else {
      assignTheme();
    }
  }

  /**
   * Asignamos un theme en base al weather code recibido
   */
  const assignTheme = (): void => {
    const weatherCode: number = weather.weather[0].id;

    if (weatherCode >= 200 && weatherCode <= 531) {
      setTheme(WeatherThemes.RAIN);
    } else if (weatherCode >= 600 && weatherCode <= 622) {
      setTheme(WeatherThemes.SNOW);
    } else if (weatherCode === 800) {
      setTheme(WeatherThemes.CLEAR);
    } else if (weatherCode >= 801 && weatherCode <= 804) {
      setTheme(WeatherThemes.CLOUDY);
    }
  }

  //Ejecutamos la función handleInit() al montar el componente.
  useEffect(() => {
    handleInit();
  }, []);

  return (
    <>
      {(weather && theme !== null) &&
        <div className={`flex items-center justify-center min-h-screen ${theme}`}>
          <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
            <div className='max-w-md mx-auto space-y-6'>
              <h1 className=" text-center">Weather at latitude <span className="text-green-600">{weather?.coord.lat}</span> and longitude <span className="text-green-600">{weather?.coord.lon}</span></h1>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  {
                    weather?.name &&
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th className="py-4 px-6 text-gray-700">Location</th>
                      <td className="py-4 px-6">{weather?.name}{weather?.sys.country && `, ${weather?.sys.country}`}</td>
                    </tr>
                  }

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Description</th>
                    <td className="py-4 px-6">{weather?.weather[0].description}</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Temperature</th>
                    <td className="py-4 px-6">{weather?.main.temp} °C</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Feels like</th>
                    <td className="py-4 px-6">{weather?.main.feels_like} °C</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Pressure</th>
                    <td className="py-4 px-6">{weather?.main.pressure} hPa</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Humidity</th>
                    <td className="py-4 px-6">{weather?.main.humidity} %</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Visibility</th>
                    <td className="py-4 px-6">{weather?.visibility} m</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th className="py-4 px-6 text-gray-700">Wind speed</th>
                    <td className="py-4 px-6">{weather?.wind.speed} m/s</td>
                  </tr>

                </tbody>
              </table>
              <div className="flex flex-row gap-2 align-middle content-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-stone-800 text-white shadow hover:bg-primary/90 h-9 px-4 py-2"
                  onClick={navigateHome}
                >Go Back!</button>
              </div>
            </div>
          </div>
        </div>}

    </>

  )
}