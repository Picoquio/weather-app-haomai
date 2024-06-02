import { useFetch } from "../hooks/useFetch";
import { IWeatherArguments, WeatherAPIResponse, WeatherUnits } from "./interfaces";

interface APICallObject {
    data: WeatherAPIResponse | null;
    hasError: boolean;
    error: any;
}

export const GetWeather = async (location: IWeatherArguments): Promise<APICallObject> => {
    const { latitude, longitude, units = WeatherUnits.METRIC } = location;
    const API_KEY: string = 'ae707004547c71c83013586552ae3f57';
    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`;
    console.log(url)

    try {
        const response = await fetch(url);
        const weatherInfo: WeatherAPIResponse = await response.json();

        if (!response.ok) {
            return {
                data: null,
                hasError: true,
                error: response.statusText
            }
        }

        return {
            data: weatherInfo,
            hasError: false,
            error: null
        }

    } catch (error: unknown) {
        console.log('va error', error)
        return {
            data: null,
            hasError: true,
            error
        }
    }
}


