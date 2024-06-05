import { IWeatherArguments, WeatherAPIResponse, WeatherUnits } from "./interfaces";

interface APICallObject {
    data: WeatherAPIResponse | null;
    hasError: boolean;
    error: any;
}

export const GetWeather = async (location: IWeatherArguments): Promise<APICallObject> => {
    //Desestructuramos propiedades recibidas de las props, por defecto seleccionamos sistema metrico en el parámetro "units"
    const { latitude, longitude, units = WeatherUnits.METRIC } = location;

    //API_KEY acá está hardcodeada debido a la naturaleza simple de esta prueba. En entornos reales no se haría algo así
    const API_KEY: string = 'ae707004547c71c83013586552ae3f57';

    //URL parametrizada para llamar a la API de openweather
    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`;


    //Llamada a la API de openweather con manejo de errores:
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
        return {
            data: null,
            hasError: true,
            error
        }
    }
}


