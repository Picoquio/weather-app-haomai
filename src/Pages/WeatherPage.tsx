import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";

enum WeatherThemes {
  RAINNING = 'Rainning',
  CLEAR = 'Clear',
  CLOUDY = 'Cloudy',
  SNOWING = 'Snowing'
}


export const WeatherPage = () => {
  const { weather } = useContext(WeatherContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState<WeatherThemes | null>(null);
  const [backgroundImageClass, setBackgroundImageClass] = useState('');

  useEffect(() => {
    handleInit();
  }, []);

  useEffect(() => {
    if (theme) {
      setBackgroundImage();
    }
  }, [theme]);

  const handleInit = () => {
    if (weather == null) {
      navigateHome();
    } else {
      assignTheme();
    }
  }

  const assignTheme = () => {
    const weatherCode: number = weather.weather[0].id;

    if (weatherCode >= 200 && weatherCode <= 531) {
      setTheme(WeatherThemes.RAINNING);
    } else if (weatherCode >= 600 && weatherCode <= 622) {
      setTheme(WeatherThemes.SNOWING);
    } else if (weatherCode === 800) {
      setTheme(WeatherThemes.CLEAR);
    } else if (weatherCode >= 801 && weatherCode <= 804) {
      setTheme(WeatherThemes.CLOUDY);
    }
  }

  const setBackgroundImage = () => {
    
    switch (theme) {
      case WeatherThemes.CLEAR:
        setBackgroundImageClass('clear');
        break;
      case WeatherThemes.CLOUDY:
        setBackgroundImageClass('cloudy');
        break;
      case WeatherThemes.RAINNING:
        setBackgroundImageClass('rain');
        break;
      case WeatherThemes.SNOWING:
        setBackgroundImageClass('snow');
        break;
      default:
        setBackgroundImageClass('');
        break;
    }
  }

  const navigateHome = () => {
    navigate('/');
  }

  return (
    <>
      {weather &&
        <div className={`flex items-center justify-center min-h-screen ${backgroundImageClass}`}>
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

// {
//   "coord": {
//      "lon": -2,
//      "lat": 33
//   },
//   "weather": [
//      {
//         "id": 804,
//         "main": "Clouds",
//         "description": "overcast clouds",
//         "icon": "04n"
//      }
//   ],
//   "base": "stations",
//   "main": {
//      "temp": 18.62,
//      "feels_like": 18.03,
//      "temp_min": 18.62,
//      "temp_max": 18.62,
//      "pressure": 1015,
//      "humidity": 57,
//      "sea_level": 1015,
//      "grnd_level": 863
//   },
//   "visibility": 10000,
//   "wind": {
//      "speed": 4.56,
//      "deg": 24,
//      "gust": 7.48
//   },
//   "clouds": {
//      "all": 99
//   },
//   "dt": 1717377018,
//   "sys": {
//      "country": "MA",
//      "sunrise": 1717390795,
//      "sunset": 1717441970
//   },
//   "timezone": 3600,
//   "id": 2555157,
//   "name": "Bouarfa",
//   "cod": 200
// }
