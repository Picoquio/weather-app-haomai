import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import { WeatherAPIResponse } from "../api/interfaces";
import { SnowFlakes } from "../components/animated/SnowFlakes";

enum WeatherThemes {
  RAINNING = 'Rainning',
  CLEAR = 'Clear',
  CLOUDY = 'Cloudy',
  SNOWING = 'Snowing'
}

export const WeatherPage = () => {
  const { weather } = useContext(WeatherContext);
  const [theme, setTheme] = useState<WeatherThemes | null>(null);

  useEffect(() => {
    setAppropiateTheme();
  }, [])


  const setAppropiateTheme = () => {
    const weatherCode: number = weather.weather[0].id;

    if (weatherCode >= 200 && weatherCode <= 531) {
      setTheme(WeatherThemes.RAINNING)
    }
    else if (weatherCode >= 600 && weatherCode <= 622) {
      setTheme(WeatherThemes.SNOWING)
    }
    else if (weatherCode === 800) {
      setTheme(WeatherThemes.CLEAR)
    }
    else if (weatherCode >= 801 && weatherCode <= 804) {
      setTheme(WeatherThemes.SNOWING)
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-red-200 to-purple-300">
        <SnowFlakes />
      </div>
      {/* <div>WeatherPage. El theme es: {theme}</div>
      <pre>
        {JSON.stringify(weather.weather[0].id, null, 3)}
      </pre> */}
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
