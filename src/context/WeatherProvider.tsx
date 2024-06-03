import { useState } from "react"
import { WeatherContext } from "./WeatherContext"
import { WeatherAPIResponse } from "../api/interfaces"

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const WeatherProvider = ({ children }: Props) => {

    const [weather, setWeather] = useState<WeatherAPIResponse | null>(null)

    return (
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    )
}
