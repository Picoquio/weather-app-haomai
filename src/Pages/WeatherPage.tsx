import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"

export const WeatherPage = () => {
  const { weather, setWeather } = useContext(WeatherContext);


  return (
    <>
      <div>WeatherPage</div>
      <pre>
        {JSON.stringify(weather, null, 3)}
      </pre>
    </>

  )
}
